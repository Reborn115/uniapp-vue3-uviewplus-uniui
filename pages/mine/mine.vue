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
	address: "",
	age: 0,
	avatarUrl: "http://dummyimage.com/100x100",
	departmentId: 1,
	education: "",
	entryTime: "2023-02-01 16:11:46",
	gender: 1,
	inviteCode: "",
	job: "",
	name: "",
	phone: "",
	position: "",
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
				<view class="iconfont icon-xiugai" @click="jumpPage">修改个人信息</view>
			</view>			
		</view>

		<!-- 其他 -->
		<view class="profile-other">
			<view class="profile-other">
				<view class="wrap"><text>职位</text><text>{{ state.data.position }}</text></view>
				<view class="wrap"><text>电话</text><text>{{ state.data.phone }}</text></view>
				<view class="wrap"><text>教育经历</text><text>{{ state.data.education }}</text></view>
				<view class="wrap"><text>年龄</text><text>{{ state.data.age }}</text></view>
				<view class="wrap"><text>地址</text><text>{{ state.data.address }}</text></view>
			</view>
			<!-- <navigator class="wrap wrap1" url="#" open-type="navigate">
				<text>意见反馈</text>
				<u-icon name="arrow-right" color="#2979ff" size="24"></u-icon>
			</navigator>
			<navigator class="wrap" url="#">
				<text>关于我们</text>
				<u-icon name="arrow-right" color="#2979ff" size="24"></u-icon>
			</navigator> -->
		</view>
	</view>
</template>
    
<style lang="less">
@import url('../../static/font_207c6njydjk/iconfont.css');

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

		.icon-xiugaixinxi {
			font-size: 28rpx;
			color: #a2a2a2;
			padding-bottom: 15rpx;
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
</style>