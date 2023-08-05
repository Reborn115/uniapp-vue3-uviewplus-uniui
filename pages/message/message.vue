<template>
	<view class="charts-box">
		<qiun-data-charts type="bar" :opts="opts" :chartData="chartData" tooltipFormat="ypjcBar" />
	</view>
</template>

<script>
import QiunDataCharts from '../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'

export default {
	data() {
		return {
			chartData: {},
			//您可以通过修改 config-ucharts.js 文件中下标为 ['bar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
			opts: {
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [15, 30, 0, 5],
				legend: {
					"position": "top",
					"float": "left",
				},
				xAxis: {
					boundaryGap: "justify",
					disableGrid: false,
					min: 0,
					axisLine: false,
					max: 70
				},
				yAxis: {},
				extra: {
					bar: {
						type: "stack",
						width: 30,
						meterBorde: 1,
						meterFillColor: "#FFFFFF",
						activeBgColor: "#000000",
						activeBgOpacity: 0.08,
						categoryGap: 2
					}
				}
			},
		}
	},
	components:{
		QiunDataCharts
	},
	computed() {
		console.log("computed")
	},
	mounted() {
		this.getServerData();//渲染图表
	},
	methods: {
		//图表渲染
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["加工业", "种植业", "畜牧业"],
					series: [
						{
							name: "合格样品",
							data: [35, 36, 31]
						},
						{
							name: "不合格样品",
							data: [18, 27, 21]
						},
						{
							name: "待检测样品",
							data: [18, 27, 21]
						},
					]
				};
				console.log(res)
				this.chartData = JSON.parse(JSON.stringify(res));

			}, 1000);
		}

	}

}

</script>

<style lang="scss">
.charts-box {
	width: 100%;
	height: 300px;
}
</style>
