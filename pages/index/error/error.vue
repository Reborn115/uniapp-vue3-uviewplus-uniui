<template>
	<view class="container" @click="goErrorDetail">
		<image src="../../../static/trumpet.png" class="trumpet"></image>
		<view class="middle">
			<view class="l">集装箱损坏</view>
			<view class="m">A3010203</view>
		</view>
		<view class="time">
			<text>04/21/04:09</text>
		</view>
	</view>
</template>

<script setup>
function goErrorDetail(){
	uni.navigateTo({
        url: '/pages/index/error/errorDetail/errorDetail',
      });
}
</script>

<style scoped lang="scss">
.container {
	padding: 10px;
	.trumpet {
			height: 50px;
			width: 50px;
			float: left;
		}
	.middle {
		float: left;
		margin-left: 6px;
		.l {
			font-weight: bold;
			margin: 5px;
		}
		.m {
			font-weight: bold;
			margin: 5px;
			font-size: 10px;
			color: #ada5a2;
		}
	}
	.time {
		font-weight: bold;
		float: right;
		font-size: 10px;
		color: #ada5a2;
	}
}
</style>
