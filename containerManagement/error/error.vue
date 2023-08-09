<template>
	<view class="container">
		<image src="../../../static/trumpet.png" class="trumpet"></image>
		<view class="middle">
			<view class="l">路障</view>
			<view class="m">2.5米限高杆</view>
		</view>
		<view class="time">
			<text>08/7/21:26</text>
		</view>
	</view>
</template>

<script>
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
