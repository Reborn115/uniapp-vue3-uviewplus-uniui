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
          <uni-th width="100" align="center">日期</uni-th>
          <uni-th width="40" align="center">时间</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td align="center">
            <view class="td-item">{{ item.operate }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="td-item">{{ item.operatePlace }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="td-item">{{ item.operateDate }}</view>
          </uni-td>
          <uni-td align="center">
            <view class="td-item">{{ item.operateTime }}</view>
          </uni-td>
        </uni-tr>
      </uni-table>
      <view class="uni-pagination-box">
        <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import importedTableData from './tableData.js';

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
const pageSize = 5;
const pageCurrent = ref(1);
const total = ref(0);
const loading = ref(false);
const selectedIndexs = ref([]);

onMounted(() => {
  selectedIndexs.value = [];
  getData(1);
});

// 多选处理
// function selectedItems() {
//   return selectedIndexs.value.map((i) => tableData.value[i]);
// }

// 多选
// function selectionChange(e) {
//   console.log(e.detail.index);
//   selectedIndexs.value = e.detail.index;
// }

// 批量删除
// function delTable() {
//   console.log(selectedItems());
// }

// 分页触发
function change(e) {
  // $refs.table.clearSelection();
  // selectedIndexs.value.length = 0;
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
  let tableDataLength = importedTableData.length;
  let data = importedTableData.filter((item, index) => {
    const idx = index - (pageCurrent - 1) * pageSize;
    return idx < pageSize && idx >= 0;
  });
  if (value) {
    data = [];
    importedTableData.forEach((item) => {
      if (item.name.indexOf(value) !== -1) {
        data.push(item);
      }
    });
    tableDataLength = data.length;
  }

  setTimeout(() => {
    typeof success === 'function' &&
      success({
        data: data,
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
