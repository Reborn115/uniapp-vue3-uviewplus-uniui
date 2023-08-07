<script setup>
import { reactive, onMounted, toRefs } from 'vue'
import QiunDataCharts from '../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'
import request from '../../request/request'
import text from '../../uni_modules/uview-plus/libs/config/props/text';

let state = reactive({
	chartData: {
		categories:[],
		series:[]
	},
	chartData1: {
		categories:[],
		series:[]
	}
})

let mockData = {
    "code": "00000",
    "message": "请求正常",
    "data": {
        "lastUpdateTime": "2023-08-01T09:21:17.000+00:00",
        "data": [
            {
                "id": 416,
                "humidity": 63,
                "pm": 50,
                "tds": 55,
                "temperature": 23,
                "turbidity": 1990,
                "time": "2023-08-01T09:21:11.000+00:00"
            },
            {
                "id": 417,
                "humidity": 43,
                "pm": 50,
                "tds": 50,
                "temperature": 31,
                "turbidity": 1956,
                "time": "2023-08-01T09:21:12.000+00:00"
            },
            {
                "id": 418,
                "humidity": 73,
                "pm": 50,
                "tds": 55,
                "temperature": 31,
                "turbidity": 1994.5,
                "time": "2023-08-01T09:21:14.000+00:00"
            },
            {
                "id": 419,
                "humidity": 53,
                "pm": 50,
                "tds": 0,
                "temperature": 21,
                "turbidity": 2003.1,
                "time": "2023-08-01T09:21:15.000+00:00"
            },
            {
                "id": 420,
                "humidity": 23,
                "pm": 50,
                "tds": 40,
                "temperature": 39,
                "turbidity": 1998.7,
                "time": "2023-08-01T09:21:17.000+00:00"
            }
        ]
    }
}
//获取数据
async function getMonitorData(){
	const res = await request("/api/iot/sensor/data","get")
    if(res.code!='00000'){
        console.error('/api/iot/sensor/data ',res.message)        
    }	
    mockData=res //更新公共数据
    renderUpdateData() //分5秒渲染   
}
//分5秒渲染数据
function renderUpdateData(){	
	for (let index = 0; index < 5; index++) {
		setTimeout(()=>{
			//turbidity
            renderSingle("chartData1",0,index,"turbidity")
			//humidity
            renderSingle("chartData",0,index,"humidity")
			//temperature
            renderSingle("chartData",3,index,"temperature")
			//pm
            renderSingle("chartData",1,index,"pm")
			//tds
            renderSingle("chartData",2,index,"tds")
		},1000*index)	
	}
}
//每一次渲染相应的某一种数据
function renderSingle(dataArr,num,index,prop){
    state[dataArr].series[num].data.shift()
	state[dataArr].series[num].data.push(mockData.data.data[index][prop])
}

function getServerData(xData, yData) {	
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let res = {
            categories: xData,
            series: [
                {
                    name: "humidity",
                    data: yData.humidity //0
                },
                {
                    name: "pm",
                    data: yData.pm //1
                },
                {
                    name: "tds",
                    data: yData.tds //2
                },
                {
                    name: "temperature",
                    data: yData.temperature //3
                },			
            ]
        }
            let res1 = {
            categories: xData,
            series: [			
                {
                    name: "turbidity",
                    data: yData.turbidity
                }
            ]
        }
            state.chartData = JSON.parse(JSON.stringify(res));
            state.chartData1 = JSON.parse(JSON.stringify(res1));
            resolve()
        },1500)
    })
}

function changeCanvas(){
	getMonitorData() //获取数据	
	// if(state.chartData.series[0].data[3]==0)
	// state.chartData.series[0].data[3]=600
	// else
	// state.chartData.series[0].data[3]=0
}

onMounted(async () => {
	let time0=new Date()
	let xData = [1, 2, 3, 4, 5];
	let tempData=mockData.data.data
	let yData={}
	// yData.humidity = tempData.map((item)=>{
	// 	return item.humidity
	// });
	// yData.pm=tempData.map((item)=>{
	// 	return item.pm
	// })
	function factory(addProperty){
		yData[addProperty]=[tempData[0][addProperty],tempData[1][addProperty],tempData[2][addProperty],tempData[3][addProperty],tempData[4][addProperty]]
	}
	factory("humidity")
	factory("pm")
	factory("tds")
	factory("temperature")
	factory("turbidity")
	// yData.tds=[tempData[0]["tds"],tempData[1]["tds"],tempData[2]["tds"],tempData[3]["tds"],tempData[4]["tds"]]
	console.log('========',yData)
	await getServerData(xData, yData);
	let time1=new Date()
	console.log("--------------》耗时：",time1-time0)
})

</script>

<template>
	<view class="charts-box">        
        <view class="gridFont">
            <view class="displayFont" style="grid-area: a1;">
                <text class="iconfont">&#xea33;</text>
                <text>空气温度</text>
                <text>{{state.chartData.series[3].data[4]}}</text>
            </view>        
            <view class="displayFont" style="grid-area: a2;">
                <text class="iconfont">&#xea34;</text>
                <text>空气湿度</text>
                <text>{{state.chartData.series[0].data[4]}}</text>
            </view>        
            <view class="displayFont" style="grid-area: a3;">
                <text class="iconfont">&#xea2e;</text>
                <text>总溶解固体</text>
                <text>{{state.chartData.series[2].data[4]}}</text>
            </view>        
            <view class="displayFont" style="grid-area: b1;">
                <text class="iconfont">&#xe63d;</text>
                <text>PM2.5</text>
                <text>{{state.chartData.series[1].data[4]}}</text>
            </view>        
            <view class="displayFont" style="grid-area: b2;">
                <text class="iconfont">&#xe6c1;</text>
                <text>浊度</text>
                <text>{{state.chartData1.series[0].data[4]}}</text>
            </view>
        </view> 

		<qiun-data-charts type="demotype" :animation="false" :loadingType="2" :opts="{update:true}" :chartData="state.chartData" />
		<qiun-data-charts type="demotype" :animation="false" :loadingType="2" :opts="{update:true}" :chartData="state.chartData1" />
		<h1 @click="changeCanvas">change</h1>
	</view>
</template>   

<style scoped>
@import url('../../static/font_4198834_igs7ray9o7f/iconfont.css');
.charts-box {
	width: 100%;
	height: 300px;
    margin: 10rpx;
}
.iconfont{
    color: #1296db;
    font-size: 45rpx;
}
.displayFont{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 45rpx;
    font-size: 30rpx;
}

.gridFont{
    display: grid;
    grid-template-columns: repeat(3,1fr);    
    grid-template-areas: 
        "a1 a2 a3"
        "b1 b2 b2";    
    /* display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; */
}
</style>