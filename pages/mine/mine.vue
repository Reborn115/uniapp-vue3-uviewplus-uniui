<script setup>
import { ref, reactive } from 'vue'
import {onShow} from '@dcloudio/uni-app'
import request from '../../request/request'
onShow(async ()=>{	
	const {data:res_data} =await request('/api/personal-center/detail','get')	
	console.log('onBeforeMount!!!!!!!!!',res_data)
	state.data = res_data
})

let isLogin = ref(true)
// mock data
const profileData = {
	address: "广东省广州市",
	age: 38,
	avatarUrl: "http://dummyimage.com/100x100",
	departmentId: 1,
	education: "大学本科",
	entryTime: "2023-02-01 16:11:46",
	gender: 1,
	inviteCode: "!SUCCESS",
	job: "超级管理员",
	name: "吴培强",
	phone: "13302238687",
	position: "运营部成员",
	userId: 5,
}
const state = reactive({	
	data: profileData
})
function jumpPage() {
	console.log('jumpPage function')
}
</script>

<template>
	<view class="profile-main" v-if="isLogin">
		<!-- 个人信息 -->
		<view class="profile-info">
			<view class="image-wrap">
				<!-- <u-avatar :text="state.data.name[0]" fontSize="25" randomBgColor size="50"></u-avatar> -->
				<u-avatar :src="state.data.avatarUrl" fontSize="28" size="50"></u-avatar>
			</view>
			<view class="info-wrap">
				<view class="profile-name">{{ state.data.name }}</view>
				<view class="iconfont icon-xiugaixinxi" @click="jumpPage">修改个人信息</view>
			</view>			
		</view>

		<!-- 其他 -->
		<view class="profile-other">
			<view class="profile-other">
				<view class="profile-item wrap"><text>职位</text><text>{{ state.data.position }}</text></view>
				<view class="profile-item wrap"><text>电话</text><text>{{ state.data.phone }}</text></view>
				<view class="profile-item wrap"><text>教育经历</text><text>{{ state.data.education }}</text></view>
				<view class="profile-item wrap"><text>年龄</text><text>{{ state.data.age }}</text></view>
				<view class="profile-item wrap"><text>地址</text><text>{{ state.data.address }}</text></view>
			</view>
			<navigator class="wrap wrap1" url="#" open-type="navigate">
				<text>意见反馈</text>
				<u-icon name="arrow-right" color="#2979ff" size="24"></u-icon>
			</navigator>
			<navigator class="wrap" url="#">
				<text>关于我们</text>
				<u-icon name="arrow-right" color="#2979ff" size="24"></u-icon>
			</navigator>
		</view>
	</view>
</template>
    
<style lang="less">
page {
	background: #f8f8f8;
	letter-spacing: 1px;
}

.profile-main {
	height: 100%;
	width: 100%;
}

.profile-info {
	margin: 10rpx 30rpx;
	border-radius: 20rpx;
	background-color: #ffffff;
	display: flex;
	height: 15%;
	padding: 20rpx;

	.image-wrap {
		flex: 1;
		align-self: center;
		padding: 0 25rpx;
		margin: 0 auto;
	}

	.info-wrap {
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding-left: 15rpx;

		.profile-name {
			font-size: 36rpx;
		}

		.profile-item {
			font-size: 24rpx;
		}

		.icon-xiugaixinxi {
			font-size: 28rpx;
			color: #a2a2a2;
			padding-bottom: 15rpx;
		}
	}

	.profile-renzheng {
		.van-button {
			font-size: 24rpx;
			font-weight: 600;
			background-color: #99cb4c;
			color: #fff;
			border-radius: 30rpx;
			width: 170rpx;
			border: 1rpx solid currentColor;
		}

		flex: 2;
		align-self: center;
	}

	.profile-renzheng2 {
		.van-button {
			font-weight: 600;
			font-size: 24rpx;
			background-color: #c7c7c7;
			color: rgb(68, 68, 68);
			border: 1rpx solid #fff;
			width: 170rpx;
		}

		flex: 2;
		align-self: center;
	}
}

.test-plan {
	display: flex;
	flex-direction: column;
	margin: 30rpx 30rpx;
	border-radius: 20rpx;
	background-color: #ffffff;
	padding-top: 20rpx;

	.no-plan {
		padding: 10rpx 20rpx;
		padding-bottom: 40rpx;
		font-size: 32rpx;
		color: #787878;
		text-align: center;
	}

	.title {
		flex: 1;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		font-size: 28rpx;
		font-weight: 600;
		// .scan{
		// 	width: 40rpx;
		// 	height: 40rpx;
		// 	float: right;
		// 	margin-right: 50rpx;
		// }
	}

	.plan-bar {
		flex: 1;
		display: flex;
		padding: 0 20rpx;

		.name,
		.time,
		.addr,
		.pro {
			flex: 2;
			text-align: center;
			font-size: 24rpx;
		}

		.name {
			flex: 3;
		}
	}

	.plan-item-wrap {
		flex: 8;

		.plan-item {
			padding: 10rpx 20rpx;
			flex: 2;
			font-size: 22rpx;
			color: #a2a2a2;
			display: flex;
			text-align: center;
			border-bottom: 1rpx solid #4e00c9;

			.img-info {
				flex: 3;
				display: flex;
				justify-content: center;
				align-items: flex-start;

				.name-text {
					width: 120rpx;
					text-align: left;
					margin-top: 10rpx;
					align-self: center;
				}

				.count {
					margin-top: 15rpx;
					font-weight: 700;
					font-size: 17rpx;
					color: #ffffff;
					background-color: #ffffff;
					width: 50rpx;
					height: 26rpx;
					align-self: center;
					border-radius: 10rpx;
				}
			}

			.plan-time {
				font-weight: 500;
				flex: 2;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-self: center;

				.hour {
					margin-top: 8rpx;
				}
			}

			.plan-addr {
				flex: 2;
				align-self: center;
			}

			.plan-progress {
				flex: 2;
				align-self: center;
				display: flex;
				justify-content: center;
				align-items: center;

				.pro-outline {
					color: #ffffff;
					padding-top: 10rpx;
					width: 85rpx;
					height: 40rpx;
					border-radius: 20rpx;
					background-color: #fa5151;
				}

				.tested {
					background-color: #589bff;
				}
			}
		}
	}

	.final-line {
		height: 60rpx;
		text-align: center;

		.van-icon {
			width: 200rpx;
		}
	}
}

.profile-other {
	display: flex;
	flex-direction: column;
	margin: 30rpx 30rpx;
	border-radius: 20rpx;
	background-color: #ffffff;
	height: 13%;

	.wrap {
		padding: 20rpx 30rpx;
		flex: 1;
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		align-items: center;
	}

	.wrap1 {
		border-bottom: 1rpx solid rgb(143, 149, 158);
	}
}

.unlogin {
	position: absolute;
	top: 75%;
	left: 50%;
	transform: translate(-50%, -50%);

	.van-button {
		width: 300rpx;
		height: 100rpx;
		font-size: 36rpx;
		letter-spacing: 1px;
	}
}

@font-face {
	font-family: "iconfont";
	/* Project id 2708397 */
	src: url("//at.alicdn.com/t/font_2708397_qf7yd08vjus.woff2?t=1627660738142") format("woff2"),
		url("//at.alicdn.com/t/font_2708397_qf7yd08vjus.woff?t=1627660738142") format("woff"),
		url("//at.alicdn.com/t/font_2708397_qf7yd08vjus.ttf?t=1627660738142") format("truetype");
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-xiugaixinxi:before {
	content: "\e639";
}</style>