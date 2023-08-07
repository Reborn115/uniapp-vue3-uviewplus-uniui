<template>
  <view class="container">
    <view class="container-info">
      <view class="info-head">集装箱信息</view>
      <view class="info-items">
        <view class="info-item">
          <view class="item-title">集装箱号：</view>
          <view class="item-content">{{ containerNumber }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">箱主：</view>
          <view class="item-content">{{ containerOwner }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">箱型：</view>
          <view class="item-content">{{ containerType }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">状态：</view>
          <view class="item-content">{{ containerState }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">Tare(kg)：</view>
          <view class="item-content">{{ containerTare }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">Max.Payload(kg)：</view>
          <view class="item-content">{{ containerMaximumLoad }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">破损情况：</view>
          <view class="item-content">{{ containerBreakage }}</view>
        </view>
        <view class="info-item">
          <view class="item-title">其他：</view>
          <view class="item-content">{{ containerOther }}</view>
        </view>
      </view>
    </view>
    <view class="operation-form">
      <uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据" @selection-change="selectionChange">
        <uni-tr>
          <uni-th width="40" align="center">操作</uni-th>
          <uni-th width="80" align="center">操作地点</uni-th>
          <uni-th width="100" align="center">时间</uni-th>
          <!-- <uni-th width="40" align="center">时间</uni-th> -->
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td align="center">
            <view class="td-item">{{ item.operation }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="td-item">{{ item.location }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="td-item">{{ item.operationTime }}</view>
          </uni-td>
          <!-- <uni-td align="center">
            <view class="td-item">{{ item.operateTime }}</view>
          </uni-td> -->
        </uni-tr>
      </uni-table>
      <view class="uni-pagination-box">
        <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
// import importedTableData from './tableData.js';
import {tsFormat} from '../../../utils/time.js';


const containerMaximumLoad = ref('27280');
const containerTare = ref('3200');
const containerOther = ref('无');
const containerBreakage = ref('无破损');
const containerState = ref('运输中');
const containerType = ref('20尺开顶柜');
const containerOwner = ref('MAERSK 马士基');
const containerNumber = ref('PONU 2932473');
const searchVal = ref('');
const tableData = ref([]);
const pageSize = 3;
const pageCurrent = ref(1);
const total = ref(0);
const loading = ref(false);
const selectedIndexs = ref([]);

const dataParam = ref('');

onMounted(() => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const query = currentPage.options;
  if (query.data) {
    // 解码并解析传递的数据
    dataParam.value = JSON.parse(decodeURIComponent(query.data));
    const containerInfo=dataParam.value.containerInfo;
    // console.log('dataParam.value.containerOperations',dataParam.value.containerOperations);
    // console.log('containerInfo',containerInfo);
    containerBreakage.value=containerInfo.damage;
    containerNumber.value=containerInfo.number;
    containerOwner.value=containerInfo.owner;
    containerState.value=containerInfo.status;
    containerType.value=containerInfo.type;
    containerMaximumLoad.value=containerInfo.bearing;
    containerOther.value=containerInfo.other;
    containerTare.value=containerInfo.weight;//Todo:确认是否为weight字段
  }
  getData(1);
});


// 分页触发
function change(e) {
  getData(e.current);
}

// 搜索
function search() {
  getData(1, searchVal.value);
}

// 获取数据
function getData(pageNum, value = '') {
  loading.value = true;
  pageCurrent.value = pageNum;
  request({
    pageSize: pageSize,
    pageCurrent:pageNum,
    value: value,
    success: (res) => {
      tableData.value = res.data;
      total.value = res.total;
      loading.value = false;
    },
  });
}

// 伪request请求
function request(options) {
  const { pageSize, pageCurrent, success, value } = options;
  let tableDataLength = dataParam.value.containerOperations.length;
  let data = dataParam.value.containerOperations.filter((item, index) => {
    const idx = index - (pageCurrent - 1) * pageSize;
    return idx < pageSize && idx >= 0;
  });
  if (value) {
    data = [];
    dataParam.value.containerOperations.forEach((item) => {
      if (item.name.indexOf(value) !== -1) {
        data.push(item);
        // console.log('item',item);
      }
    });
    tableDataLength = data.length;
  }
  // console.log('requestdata',data);
  const transformedArray = data.map(({ operationTime, ...rest }) => {
    return { operationTime: tsFormat(operationTime), ...rest };
  });
  // console.log('transformedArray',transformedArray);
  setTimeout(() => {
    typeof success === 'function' &&
      success({
        data: transformedArray,
        total: tableDataLength,
      });
  }, 500);
}
</script>

<style scoped lang="scss">
.operation-form {
  width: 90vw;
}

.uni-group {
  display: flex;
  align-items: center;
}

.container-info {
  font-size: 17px;
  background-color: #efefef;
  width: 80vw;
  padding: 2vh 4vw 2vh 4vw;
  margin: 4vh 0 4vh 0;

  .info-head {
    font-weight: bold;
    margin: 0 0 2vh 0;
  }

  .info-items {
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.info-item {
  margin: 0 0 1vh 0;
  display: flex;

  .item-title {
  }

  .item-content {
  }
}
</style>
