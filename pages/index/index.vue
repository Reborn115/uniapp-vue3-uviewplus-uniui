<template>
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

<script setup>
import { ref } from 'vue';

const containerNumber = ref('');
const cameraImagePath = ref('');

import { defineAsyncComponent } from 'vue';

// 调用接口进行搜索并获取数据
async function searchContainerData(containerNumber) {
  console.log('containerNumber',containerNumber)
  return {containerNumber:containerNumber}
}

// 当点击搜索或回车
async function onSearch(value) {
  console.log(value);
  try {
    // 调用接口进行搜索并获取数据
    const data = await searchContainerData(containerNumber.value);
	  console.log('data',data)
    // 将数据存储到本地
    uni.setStorageSync('containerData', JSON.stringify(data));
    console.log('containerData',uni.getStorageSync('containerData'));
    // 跳转至数据展示页面，并将数据作为URL参数传递
    uni.navigateTo({
      url: '/pages/index/containerDetail/containerDetail?data=' + encodeURIComponent(JSON.stringify(data)),
    });
  } catch (error) {
    console.error('搜索出错：', error);
  }
}

function onContainerNumberChange(value) {
  console.log(value);
}

const showCamera = () => {
  uni.chooseImage({
    count: 1,
    sourceType: ['camera'],
    success: (res) => {
      // 处理拍照成功后的逻辑
      const tempFilePaths = res.tempFilePaths;
      // 将图片路径保存到data中
      cameraImagePath.value = tempFilePaths[0];
      console.log('cameraImagePath', cameraImagePath.value);
    },
    fail: (error) => {
      console.error('拍照失败：', error);
    },
  });
};
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