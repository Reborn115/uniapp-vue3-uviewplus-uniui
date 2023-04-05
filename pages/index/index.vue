<template>
  <view class="content">
    <view class="tabs">
      <u-sticky bgColor="linear-gradient(to right, #12D8FA, #a5fecb)">
        <u-tabs
          @change="change"
          :current="currentTabIndex"
          :list="tabslist"
          lineColor="white"
          :activeStyle="{
            color: 'white',
            fontWeight: 'bold',
            transform: 'scale(1.05)',
          }"
          :inactiveStyle="{
            color: 'white',
            transform: 'scale(1)',
          }"
          itemStyle="height: 34px;"
        >
          <template #right>
            <!-- <div class="line" /> -->
          </template>
        </u-tabs>
      </u-sticky>
    </view>
    <view class="list">
      <uni-datetime-picker
        v-model="datetimerange"
        type="datetimerange"
        rangeSeparator="至"
      />
      <view v-if="currentTabIndex == 0">
        <uni-card :is-shadow="false" class="container">
          <view class="info">
            <view class="title">
              <h3>图书馆学习</h3>
            </view>
            <view>
              <text class="sex">性别不限</text>
              <text>人数不限</text>
            </view>
            <view>
              <text>开始时间：2023-4-12 7:30</text>
            </view>
            <view class="tags">
              <u-tag
                text="标签"
                type="info"
                shape="circle"
                plain
                borderColor="#EFEFEF"
              ></u-tag>
              <u-tag
                text="标签"
                type="info"
                shape="circle"
                plain
                borderColor="#EFEFEF"
              ></u-tag>
              <u-tag
                text="标签"
                type="info"
                shape="circle"
                plain
                borderColor="#EFEFEF"
              ></u-tag>
            </view>
          </view>
          <view class="pickbotton">
            <u-button
              text="Pal一下"
              color="linear-gradient(to bottom, #29A7FE, #62DFE5)"
              shape="circle"
            ></u-button>
          </view>
        </uni-card>
        <view class="add">
          <u--image
            :lazy-load="true"
            :showLoading="true"
            width="55px"
            height="55px"
            src="https://s2.loli.net/2023/04/05/TNSu8oipV5LJqAr.png"
            shape="circle"
          ></u--image>
        </view>
      </view>
      <view v-if="currentTabIndex == 1"> </view>
      <view v-if="currentTabIndex == 2"> </view>
    </view>
  </view>
</template>

<script>
import uText from "../../uni_modules/uview-plus/components/u--text/u--text.vue";
export default {
  components: { uText },
  data() {
    return {
      datetimerange: "",
      currentTabIndex: 0,
      tabslist: [
        {
          name: "全部",
        },
        {
          name: "运动",
        },
        {
          name: "美食",
        },
        {
          name: "出行",
        },
        {
          name: "学习",
        },
        {
          name: "其他",
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    change(index) {
      console.log(index);
      if (this.currentTabIndex != index.index) {
        this.currentTabIndex = index.index;
        console.log(this.currentTabIndex);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  position: absolute;
  top: 90vh;
  left: 80vw;
}
::v-deep .uni-card__content {
  display: flex !important;
}
.pickbotton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 18vh;
}
::v-deep .u-button {
  width: 25vw !important;
  height: 5vh !important;
}
.container {
  display: flex;
}
::v-deep .u-tag {
  margin-right: 3vw !important;
  // width: 10vw !important;
  // align-items: center !important;
  // box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2) !important;
}
.sex {
  margin-right: 3vw;
}
.tags {
  display: flex;
}
.info {
  width: 50vw;
  height: 18vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.title {
  font-size: 17px;
  font-weight: bold;
}
::v-deep .uni-card {
  // display: flex;
  // flex-direction: row !important;
  margin: 0 !important;
  margin-top: 2vh !important;
  // padding: 0 !important;
  border-radius: 10px;
  height: 20vh;
  width: 83.5vw;
  box-shadow: 5px 5px 8px #bebebe !important;
}
.list {
  width: 90vw;
  margin-top: 2vh;
}
.tabs {
  width: 100vw;
  background-image: linear-gradient(to bottom, #3bcaf2, #95f5d0) !important;
  padding-left: 4vw;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: row;
}
/* 竖线 */
.line {
  float: left;
  width: 0.1em;
  height: 1.5em;
  margin-right: 1em;
  margin-left: 1em;
  background: #f3f3f3;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
