<template>
  <u-toast ref="uToast" />
  <div class="container">
    <div class="bell-icon">
      <div style="width: 80vw"></div>
      <u-icon name="bell" color="#535353" size="40" />
    </div>
    <div class="camera-icon" @click="showCamera">
      <u-icon name="camera" color="#efefef" size="200" />
    </div>
    <div class="search-bar">
      <u-search
        shape="round"
        :show-action="false"
        :clearable="true"
        v-model="containerNumber"
        placeholder="请输入集装箱箱号"
        @change="onContainerNumberChange"
        @search="performSearch"
        @custom="performSearch"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getCurrentInstance } from 'vue';
import request from '@/request/request.js';

export default {
  setup() {
    const instance = getCurrentInstance();
    const containerNumber = ref('');
    const cameraImagePath = ref('');

    const showToast = (params) => {
      instance.proxy.$refs.uToast.show({
        ...params,
        complete() {
          if (params.url) {
            uni.navigateTo({
              url: params.url,
            });
          }
        },
      });
    };

    const performSearch = async (value) => {
      try {
        const res = await request('/api/iot/get-container', 'POST', { number: value });
        if (res.code === '00000') {
          console.log(res.data);
          uni.setStorageSync('containerData', res.data);
          showToast({
            type: 'success',
            message: '搜索成功',
            url: '/pages/index/containerDetail/containerDetail',
          });
        } else {
          throw new Error(res.message);
        }
      } catch (error) {
        console.error('搜索出错：', error);
        showToast({
          type: 'error',
          message: error.message,
        });
      }
    };

    const onContainerNumberChange = (value) => {
      console.log(value);
      containerNumber.value=value;
    };

    const showCamera = async () => {
      try {
        const res = await uni.chooseImage({
          count: 1,
          sizeType: ['compressed'],
        });
        const tempFilePaths = res.tempFilePaths;
        cameraImagePath.value = tempFilePaths[0];

        const uploadRes = await uni.uploadFile({
          url: 'https://cs.api.yuleng.top/api/iot/detect',
          filePath: res.tempFilePaths[0],
          header: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + uni.getStorageSync('token'),
          },
          name: 'file',
        });

        const parsedUploadRes = JSON.parse(uploadRes.data);
        if (parsedUploadRes.code === '00000') {
          const containerData = parsedUploadRes.data;
          uni.setStorageSync('containerData', containerData);
          showToast({
            type: 'success',
            message: '识别成功',
            url: '/pages/index/containerDetail/containerDetail',
          });
        } else {
          showToast({
            type: 'error',
            message: parsedUploadRes.message,
          });
        }
      } catch (error) {
        console.error('拍照失败：', error);
      }
    };

    return {
      containerNumber,
      cameraImagePath,
      performSearch,
      onContainerNumberChange,
      showCamera,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  width: 90vw;
  height: 20vh;
  display: flex;
}

.bell-icon {
  display: flex;
  justify-content: space-around;
  height: 5vh;
  align-items: center;
}

.camera-icon {
  height: 50vh;
  width: 85vw;
  background-color: #003664;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>
