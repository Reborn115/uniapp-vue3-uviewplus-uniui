<template>
	<view class="charts-box">
		<qiun-data-charts type="demotype" :animation="false" :loadingType="2" :opts="{update:true}" :chartData="state.chartData" />
		<qiun-data-charts type="demotype" :animation="false" :loadingType="2" :opts="{update:true}" :chartData="state.chartData1" />
		<h1 @click="changeCanvas">change</h1>
	</view>
</template>   
<script setup>
import { reactive, onMounted, toRefs } from 'vue'
import QiunDataCharts from '../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'
import request from '../../request/request'

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
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1990.3380126953125,
                "time": "2023-08-01T09:21:11.000+00:00"
            },
            {
                "id": 417,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1956.5223388671875,
                "time": "2023-08-01T09:21:12.000+00:00"
            },
            {
                "id": 418,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1994.56494140625,
                "time": "2023-08-01T09:21:14.000+00:00"
            },
            {
                "id": 419,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 2003.018798828125,
                "time": "2023-08-01T09:21:15.000+00:00"
            },
            {
                "id": 420,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1998.7918701171875,
                "time": "2023-08-01T09:21:17.000+00:00"
            }
        ]
    }
}
let mockData1 = {
    "code": "00000",
    "message": "请求正常",
    "data": {
        "lastUpdateTime": "2023-08-01T09:21:17.000+00:00",
        "data": [
            {
                "id": 416,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1990.3380126953125,
                "time": "2023-08-01T09:21:11.000+00:00"
            },
            {
                "id": 417,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1956.5223388671875,
                "time": "2023-08-01T09:21:12.000+00:00"
            },
            {
                "id": 418,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1994.56494140625,
                "time": "2023-08-01T09:21:14.000+00:00"
            },
            {
                "id": 419,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 2003.018798828125,
                "time": "2023-08-01T09:21:15.000+00:00"
            },
            {
                "id": 420,
                "humidity": 73,
                "pm": 0,
                "tds": 0,
                "temperature": 31,
                "turbidity": 1998.7918701171875,
                "time": "2023-08-01T09:21:17.000+00:00"
            }
        ]
    }
}
//获取数据
async function getMonitorData(){
	const res = await request("https://cs.api.yuleng.top/api/iot/sensor/data","get")
	console.log("get data::::::",res)
}

function renderUpdateData(){
	// let xData = [1, 2, 3, 4, 5];
	let tempData=mockData.data.data
	// let yData={}	
	// await getServerData(xData, yData);
	for (let index = 0; index < 5; index++) {
		setTimeout(()=>{
			console.log("setTimeout")
			state.chartData1.series[0].data.shift()
			state.chartData1.series[0].data.push(tempData[index].turbidity)
		},1000*index)	
	}
}

function getServerData(xData, yData) {	
	setTimeout(()=>{
		let res = {
		categories: xData,
		series: [
			{
				name: "humidity",
				data: yData.humidity
			},
			{
				name: "pm",
				data: yData.pm
			},
			{
				name: "tds",
				data: yData.tds
			},
			{
				name: "temperature",
				data: yData.temperature
			},
			// {
			// 	name: "turbidity",
			// 	data: yData.turbidity
			// }
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
	},1500)	
}

function changeCanvas(){
	// getMonitorData()
	renderUpdateData()
	if(state.chartData.series[0].data[3]==0)
	state.chartData.series[0].data[3]=600
	else
	state.chartData.series[0].data[3]=0
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

<style scoped>
.charts-box {
	width: 100%;
	height: 300px;
}
</style>
   