<template>
  <u-toast ref="uToast"></u-toast>
  <view class="container">
    <view class="bell-icon">
      <view style="width:80vw"></view>
      <u-icon name="bell" color="#535353" size="40"></u-icon>
    </view>
    <view class="camera-icon" @click="showCamera">
      <u-icon name="camera" color="#efefef" size="200"></u-icon>
    </view>
    <view class="search-bar">
      <u-search shape="round" :show-action="false" :clearabled="true" v-model="containerNumber" placeholder="请输入集装箱箱号" @change="onContainerNumberChange" @search="onSearch" @custom="onSearch">
      </u-search>
    </view>
  </view>
</template>

<script>
import request from "@/request/request.js";
import { ref } from 'vue';
import { getCurrentInstance } from 'vue'

export default {
  data(){
    return{}
  },
  methods: {
  },
  setup() {
    const instance= getCurrentInstance();
    const containerNumber = ref('EITU178639');
    const containerInfo=ref('');
    const cameraImagePath = ref('');
    function showToast(params) {
      instance.proxy.$refs.uToast.show({
        ...params,
        complete() {
          params.url &&
            uni.navigateTo({
              url: params.url,
            });
        },
      });
    }
    // 调用接口进行搜索并获取数据
    async function searchContainerData(containerNumber) {
      const res = await request("/api/iot/get-container", "POST", {
        number:containerNumber
      });
      if (res.code == "00000") {
        containerInfo.value=res.data.containerInfo
        return {containerInfo:res.data}
      } else {
        showToast({
          type: "error",
          message: res.message,
        });
      }
    }

    // 当点击搜索或回车
    async function onSearch(value) {
      console.log(value);
      try {
        // 调用接口进行搜索并获取数据
        const data = await searchContainerData(containerNumber.value);

        // 将数据存储到本地
        
        if(data.containerInfo){
          uni.setStorageSync('containerData', data.containerInfo);
          // 跳转至数据展示页面，并将数据作为URL参数传递
          // console.log('搜索传参',data.containerInfo);
          // console.log('搜索存参',uni.getStorageSync("containerData"));
          showToast({
            type: "success",
            message: '搜索成功',
            url: '/pages/index/containerDetail/containerDetail',
          });
        }
        // uni.navigateTo({
        //   url: '/pages/index/containerDetail/containerDetail?data=' + encodeURIComponent(JSON.stringify(data.containerInfo)),
        // });
      } catch (error) {
        console.error('搜索出错：', error);
        showToast({
          type: "error",
          message: data.message,
        });
      }
    }

    function onContainerNumberChange(value) {
      console.log(value);
    }

    const showCamera = () => {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          cameraImagePath.value = tempFilePaths[0];
          console.log('cameraImagePath', cameraImagePath.value);

          uni.uploadFile({
            url: 'https://cs.api.yuleng.top/api/iot/detect',
            filePath: res.tempFilePaths[0],
            header:{
              "Content-Type": "application/json",
              Authorization: "Bearer " + uni.getStorageSync("token")
            },
            name: 'file',
            success: (uploadRes) => {
              const res=JSON.parse(uploadRes.data);
              if(res.code=='00000'){
                console.log('上传成功', JSON.parse(uploadRes.data));
                const containerInfo=JSON.parse(uploadRes.data).data
                uni.setStorageSync('containerData', containerInfo);
                console.log('拍照传参',containerInfo);
                showToast({
                  type: "success",
                  message: '识别成功',
                  url: '/pages/index/containerDetail/containerDetail',
                });
                // uni.navigateTo({
                //   url: '/pages/index/containerDetail/containerDetail?data=' + encodeURIComponent(JSON.stringify(containerInfo)),
                // });
              } else{
                showToast({
                  type: "error",
                  message: JSON.parse(uploadRes.data).message,
                });
              }
            },
            fail: (uploadError) => {
              console.error('上传失败：', uploadError);
            }
          });
        },
        fail: (error) => {
          console.error('拍照失败：', error);
        },
      });
    };

    return {
      containerNumber,
      containerInfo,
      cameraImagePath,
      onSearch,
      onContainerNumberChange,
      showCamera
    };
  }
}
</script>


<style lang="scss" scoped>
.search-bar{
  width: 90vw;
  height: 20vh;
  display: flex;
}
.bell-icon{
  display: flex;
  justify-content: space-around;
  height: 5vh;
  align-items: center;
}
.camera-icon{
  height: 50vh;
  width: 85vw;
  background-color: #003664;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>