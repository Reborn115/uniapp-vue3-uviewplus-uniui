<template>
  <div class="container">
    <div class="container-info">
      <div class="info-head">集装箱信息</div>
      <div class="info-items">
        <div class="info-item" v-for="item in infoItems" :key="item.title">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-content">{{ item.content != null ? item.content.value : '暂无数据' }}</div>
        </div>
      </div>
    </div>
    <div class="operation-form">
      <uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据" @selection-change="selectionChange">
        <uni-tr>
          <uni-th width="40" align="center">操作</uni-th>
          <uni-th width="80" align="center">操作地点</uni-th>
          <uni-th width="100" align="center">时间</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td align="center">
            <div class="td-item">{{ item.operation }}</div>
          </uni-td>
          <uni-td align="center">
            <div class="td-item">{{ item.location }}</div>
          </uni-td>
          <uni-td align="center">
            <div class="td-item">{{ item.operationTime }}</div>
          </uni-td>
        </uni-tr>
      </uni-table>
      <div class="uni-pagination-box">
        <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tsFormat } from '../../../utils/time.js';

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
const pageSize = 2;
const pageCurrent = ref(1);
const total = ref(0);
const loading = ref(false);
const selectedIndexs = ref([]);
const dataParam = ref('');

const infoItems = [
  { title: '集装箱号：', content: containerNumber },
  { title: '箱主：', content: containerOwner },
  { title: '箱型：', content: containerType },
  { title: '状态：', content: containerState },
  { title: 'Tare(kg)：', content: containerTare },
  { title: 'Max.Payload(kg)：', content: containerMaximumLoad },
  { title: '破损情况：', content: containerBreakage },
  { title: '其他：', content: containerOther },
];

onMounted(() => {
  dataParam.value = uni.getStorageSync('containerData');
  uni.setStorageSync('containerData', '');
  const containerInfo = dataParam.value.containerInfo;
  if (containerInfo.damage) {
    containerBreakage.value = containerInfo.damage;
  }
  console.log('containerInfo.number',containerInfo.number);
  containerNumber.value = containerInfo.number;
  containerOwner.value = containerInfo.owner;
  containerState.value = containerInfo.status;
  containerType.value = containerInfo.type;
  containerMaximumLoad.value = containerInfo.bearing;
  if(containerInfo.other==null){
    containerInfo.other='暂无数据'
  }
  containerOther.value = containerInfo.other;
  containerTare.value = containerInfo.weight;
  getData(1);
  console.log('containerNumber',containerNumber.value);
});

function change(e) {
  getData(e.current);
}

function getData(pageNum, value = '') {
  loading.value = true;
  pageCurrent.value = pageNum;
  // Simulating request using setTimeout
  setTimeout(() => {
    const simulatedData = getSimulatedData(dataParam.value.containerOperations, pageSize, pageNum, value);
    tableData.value = simulatedData.data;
    total.value = simulatedData.total;
    loading.value = false;
  }, 500);
}

function getSimulatedData(data, pageSize, pageCurrent, value) {
  let tableDataLength = data.length;
  let filteredData = data.filter((item, index) => {
    const idx = index - (pageCurrent - 1) * pageSize;
    return idx < pageSize && idx >= 0;
  });

  if (value) {
    filteredData = data.filter(item => item.name.indexOf(value) !== -1);
    tableDataLength = filteredData.length;
  }

  const transformedData = filteredData.map(({ operationTime, ...rest }) => {
    return { operationTime: tsFormat(operationTime), ...rest };
  });

  return {
    data: transformedData,
    total: tableDataLength,
  };
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
