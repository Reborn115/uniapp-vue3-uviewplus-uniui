<template>
	<view>
		<!-- <u-tabs :list="navlist" @click="click"  itemStyle="padding-left: 14vw; padding-right: 14vw; height: 34px;"></u-tabs> -->
	  <u-tabs 
	  :list="navlist" 
	  :is-scroll="false" 
	  itemStyle="padding-left: 14vw; padding-right: 14vw; height: 34px;"
	  @change="change">
	  </u-tabs>
	  <view v-if="current == 0">
		<view>
			<u-picker :show="show" :columns="columns"></u-picker>
			<view style="width: 80vw;margin-top: 5vh;margin-bottom: 2vh;margin-left: 3vw;">
				<uni-data-select
				        v-model="value"
				        :localdata="range"
				        @change="change1"
				  ></uni-data-select>
				  <view style="margin-top: 2vh;font-weight:500;">堆场总箱位：{{ con_used + con_unused }}</view>
				  <view style="font-weight: 500;">堆场已用箱位：{{ con_used }}</view>
				  <view style="font-weight: 500;">堆场剩余箱位：{{ con_unused }}</view>
			</view>
		</view>
		<canvas canvas-id="hsZsWpcOlypNpamdKsjVxGBADvXyMJB" id="hsZsWpcOlypNpamdKsjVxGBADvXyMJB" class="charts1" @touchend="tap"/>
	  </view>
	  <view v-if="current == 1">
		<view>
			<u-picker :show="show" :columns="columns"></u-picker>
			<view style="width: 80vw;margin-top: 5vh;margin-bottom: 2vh;margin-left: 3vw;">
				<uni-data-select
				        v-model="value"
				        :localdata="timeRange"
				        @change="change2"
				  ></uni-data-select>
			</view>
		</view>
		<canvas canvas-id="hsZsWpcOlypNpamdKsjVxGBADvXyMJBc" id="hsZsWpcOlypNpamdKsjVxGBADvXyMJBc" class="charts2" @touchend="tap"/>
	  </view>
	</view>
</template>

<script setup>
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
import request from "@/request/request.js";
import { onMounted, ref, reactive } from 'vue';
const current = ref(0);
const total = ref(0)
const used = ref(0)
const left = ref(0)
const show = ref(false);
const cWidth = ref(750);
const cHeight = ref(750);
const data = ref([]);
const con_used = ref(0);
const con_unused = ref(0);
const pieIndex = ref(21);
const timeRange = ref([
	{value:0,text:'1月-6月'},
	{value:1,text:'7月-12月'},
])
const month = ref([]);
const enterData = ref([]);
const outdata = ref([]);

const range =  ref([
          { value: 0, text: "A1" },
          { value: 1, text: "A2" },
          { value: 2, text: "A3" },
		  { value: 3, text: "A4" },
		  { value: 4, text: "A5" },
		  { value: 5, text: "A6" },
		  { value: 6, text: "B1" },
		  { value: 7, text: "B2" },
		  { value: 8, text: "B3" },
		  { value: 9, text: "B4" },
		  { value: 10, text: "冷藏区1" },
		  { value: 11, text: "冷藏区2" },
		  { value: 12, text: "冷藏区3" },
		  { value: 13, text: "危险品区1" },
		  { value: 14, text: "危险品区2" },
		  { value: 15, text: "危险品区3" },
		  { value: 16, text: "危险品区4" },
		  { value: 17, text: "其他区1" },
		  { value: 18, text: "其他区2" },
		  { value: 19, text: "其他区3" },
		  { value: 20, text: "其他区4" },
		  { value: 21, text: "全部" }
        ]);
const columns = reactive([
  ['中国', '美国', '日本']
]);
const navlist = ref([{
                    name: '场位统计',
                }, {
                    name: '进出场统计',
                }]);
const uChartsInstance = {};

function change1(e) {
        console.log("e:", e);
		let count = 0;
		switch(e){
			case 0:
				for(let i = 0; i < data.value.length;i++){
					if(data.value[i].position.substring(0,2) == 'A1' &&data.value[i].status == '堆场中'){
						count += 1;
					}
				}
				con_unused.value = 32-count;
				con_used.value = count;
			break;
			case 1:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'A2' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 2:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'A3' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 3:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'A4' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 4:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'A5' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 5:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'A6' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 6:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'B1' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 7:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'B2' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 8:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'B3' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 9:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'B4' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 10:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'C1' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 11:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'C2' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 12:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'C3' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 13:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'D1' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 14:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'D2' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 15:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'D3' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 16:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'D4' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 17:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'E1' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 18:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'E2' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 19:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'E3' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 20:
			for(let i = 0; i < data.value.length;i++){
				if(data.value[i].position.substring(0,2) == 'E4' && data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 32-count;
			con_used.value = count;
			break;
			case 21:
			for(let i = 0; i < data.value.length;i++){
				if( data.value[i].status == '堆场中'){
					count += 1;
				}
			}
			con_unused.value = 432-count;
			con_used.value = count;
			break;

		}
		getServerData();
}
function change2(e){
	if(e == 0){
		month.value = ['1月','2月','3月','4月','5月','6月'];
		enterData.value =  [210,260,255,188,147,165]
		outdata.value =[180,142,166,179,122,160]
	}else {
		month.value = ['7月','8月','9月','10月','11月','12月']
		enterData.value = [199,60,0,0,0,0]
		outdata.value = [130,60,0,0,0,0]
		enterData.value[1] = enterData.value[1]+data.value.length;
		for(let i =0;i < data.value.length;i++){
			if(data.value[i].status != '堆场中'){
				outdata.value[1]+=1;
			} 
		}
	}
	getServerData1()
}
onMounted(async () => {
  cWidth.value = uni.upx2px(750);
  cHeight.value = uni.upx2px(750);
  getServerData();
  const res = await request("/api/yard/display-containerInfo", "GET", {});
  if (res.code == "00000") {
        data.value = res.data.containerInfoList;
		setPieData(data.value);
		setLineData(data.value);
      } else {
  }
  // change1(21);
  change2(1);
});
function setLineData(all_data){
	
}
function setPieData(all_data){
	
}
//饼图数据
const getServerData = () => {
  setTimeout(() => {
    const res = {
      series: [
        {
          data: [
            {"name":"已用箱位","value":con_used.value},
            {"name":"剩余箱位","value":con_unused.value}
          ]
        }
      ]
    };
    drawCharts('hsZsWpcOlypNpamdKsjVxGBADvXyMJB', res);
  }, 500);
};
//折线图数据
const getServerData1 = () => {
//模拟从服务器获取数据时的延时
	setTimeout(() => {
	  //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
	  const res = {
		  categories: month.value,
		  series: [
			{
			  name: "进场量",
			  data: enterData.value
			},
			{
			  name: "出场量",
			  data: outdata.value
			}
		  ]
		};
	  drawCharts1('hsZsWpcOlypNpamdKsjVxGBADvXyMJBc', res);
	}, 500);
};
//饼图加载
const drawCharts = (id, data) => {
const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: "pie",
        context: ctx,
        width: cWidth.value,
        height: cHeight.value,
        series: data.series,
        animation: true,
        timing: "easeOut",
        duration: 1000,
        rotate: false,
        rotateLock: false,
        background: "#FFFFFF",
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [5,5,5,5],
        fontSize: 13,
        fontColor: "#666666",
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: "solid",
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        legend: {
          show: true,
          position: "bottom",
          float: "center",
          padding: 5,
          margin: 5,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          fontSize: 13,
          fontColor: "#666666",
          lineHeight: 11,
          hiddenColor: "#CECECE",
          itemGap: 10
        },
        extra: {
          pie: {
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: 0,
            labelWidth: 15,
            border: true,
            borderWidth: 3,
            borderColor: "#FFFFFF",
            customRadius: 0,
            linearType: "none"
          },
          tooltip: {
            showBox: true,
            showArrow: true,
            showCategory: false,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: "#000000",
            borderOpacity: 0.7,
            bgColor: "#000000",
            bgOpacity: 0.7,
            gridType: "solid",
            dashLength: 4,
            gridColor: "#CCCCCC",
            boxPadding: 3,
            fontSize: 13,
            lineHeight: 20,
            fontColor: "#FFFFFF",
            legendShow: true,
            legendShape: "auto",
            splitLine: true,
            horizentalLine: false,
            xAxisLabel: false,
            yAxisLabel: false,
            labelBgColor: "#FFFFFF",
            labelBgOpacity: 0.7,
            labelFontColor: "#666666"
          }
        }
      });
};
//折线图加载
const drawCharts1 = (id,data) =>{
      const ctx = uni.createCanvasContext(id, this);
      uChartsInstance[id] = new uCharts({
        type: "area",
        context: ctx,
        width: cWidth.value,
        height: cHeight.value,
        categories: data.categories,
        series: data.series,
        animation: true,
        timing: "easeOut",
        duration: 1000,
        rotate: false,
        rotateLock: false,
        background: "#FFFFFF",
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [15,15,0,15],
        fontSize: 13,
        fontColor: "#666666",
        dataLabel: true,
        dataPointShape: true,
        dataPointShapeType: "solid",
        touchMoveLimit: 60,
        enableScroll: false,
        enableMarkLine: false,
        legend: {
          show: true,
          position: "bottom",
          float: "center",
          padding: 5,
          margin: 5,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          fontSize: 13,
          fontColor: "#666666",
          lineHeight: 11,
          hiddenColor: "#CECECE",
          itemGap: 10
        },
        xAxis: {
          disableGrid: true,
          disabled: false,
          axisLine: true,
          axisLineColor: "#CCCCCC",
          calibration: false,
          fontColor: "#666666",
          fontSize: 13,
          lineHeight: 20,
          marginTop: 0,
          rotateLabel: false,
          rotateAngle: 45,
          itemCount: 5,
          boundaryGap: "center",
          splitNumber: 5,
          gridColor: "#CCCCCC",
          gridType: "solid",
          dashLength: 4,
          gridEval: 1,
          scrollShow: false,
          scrollAlign: "left",
          scrollColor: "#A6A6A6",
          scrollBackgroundColor: "#EFEBEF",
          title: "",
          titleFontSize: 13,
          titleOffsetY: 0,
          titleOffsetX: 0,
          titleFontColor: "#666666",
          formatter: ""
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
          disabled: false,
          disableGrid: false,
          splitNumber: 5,
          gridColor: "#CCCCCC",
          padding: 10,
          showTitle: false,
          data: []
        },
        extra: {
          area: {
            type: "straight",
            opacity: 0.2,
            addLine: true,
            width: 2,
            gradient: false,
            activeType: "hollow"
          },
          tooltip: {
            showBox: true,
            showArrow: true,
            showCategory: false,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: "#000000",
            borderOpacity: 0.7,
            bgColor: "#000000",
            bgOpacity: 0.7,
            gridType: "solid",
            dashLength: 4,
            gridColor: "#CCCCCC",
            boxPadding: 3,
            fontSize: 13,
            lineHeight: 20,
            fontColor: "#FFFFFF",
            legendShow: true,
            legendShape: "auto",
            splitLine: true,
            horizentalLine: false,
            xAxisLabel: false,
            yAxisLabel: false,
            labelBgColor: "#FFFFFF",
            labelBgOpacity: 0.7,
            labelFontColor: "#666666"
          },
          markLine: {
            type: "solid",
            dashLength: 4,
            data: []
          }
        }
      });
    };
const tap = (e) =>{
      uChartsInstance[e.target.id].touchLegend(e);
      uChartsInstance[e.target.id].showToolTip(e);
    }
const put = () =>{
	console.log("pie")
}
//tab栏变化
function change(index) {
	current.value = index.index;
	cWidth.value = uni.upx2px(750);
	cHeight.value = uni.upx2px(750);
	if(current.value == 0){
		  getServerData();
	}
	if(current.value == 1){
		  getServerData1();
	}
}
</script>

<style>
canvas {
	width: 100vw;
	height: 80vh;
    margin-top: 15vh;
}

</style>
