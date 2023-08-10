<template>
	<view class="container">
		<view class="navigation">
			<text class="title">{{ receive }}</text>
			<view class="nav-icon">
				<image src="../../../static/error.png" class="icon-error" @click="toAbnormity"></image>
				<image src="../../../static/analist.png" class="icon-anlist" @click="toAnalist"></image>
			</view>
		</view>
		<view class="search-bar">
		  <u-search shape="round" :show-action="false" :clearabled="true" v-model="searchText" placeholder="箱号/地址" @change="onContainerNumberChange" @search="onSearch" @custom="onSearch">
		  </u-search>
		</view>
		<image src="../../../static/plus.png" class="add-btn"  @click="add_open"></image>
		<view style="width: 100vw;display: flex;justify-content: space-between;margin-bottom: 2vh;">
			<view style="font-weight: bold;margin-left: 5vw;">第{{ layer }}层</view>
			<view style="display: flex;" v-if="receiveArea[0] == 'A'">
				<button @click="lastLayer(1)" type="primary" style="margin-right: 2vw;background-color: #3dccf4; width: 60px; height: 25px;font-size: 10px;">上一页</button>
				<button @click="nextLayer(2)" type="primary" style="margin-right: 5vw;background-color: #3dccf4; width: 60px; height: 25px;font-size: 10px;">下一页</button>
			</view>
		</view>
		<view class="cont-items" style="display: flex;margin-left: 3vw;">
			<view >
				<view class="t"><text>04</text></view><view class="t"><text>03</text></view><view class="t"><text>02</text></view><view class="t"><text>01</text></view>
			</view>
			<view class="cont" style="width: 75vw;display: flex;flex-wrap: wrap;" v-if="layer == 1">
				<view class="item" :style="{backgroundColor:colorList1[12]}" @click="info_open('010104')"></view><view class="item" :style="{backgroundColor:colorList1[13]}" @click="info_open('010204')"></view><view class="item" :style="{backgroundColor:colorList1[14]}" @click="info_open('010304')"></view><view class="item" :style="{backgroundColor:colorList1[15]}" @click="info_open('010404')"></view>
				<view class="item" :style="{backgroundColor:colorList1[8]}" @click="info_open('010103')"></view><view class="item" :style="{backgroundColor:colorList1[9]}" @click="info_open('010203')"></view><view class="item" :style="{backgroundColor:colorList1[10]}" @click="info_open('010303')"></view><view class="item" :style="{backgroundColor:colorList1[11]}" @click="info_open('010403')"></view>
				<view class="item" :style="{backgroundColor:colorList1[4]}" @click="info_open('010102')"></view><view class="item" :style="{backgroundColor:colorList1[5]}" @click="info_open('010202')"></view><view class="item" :style="{backgroundColor:colorList1[6]}" @click="info_open('010302')"></view><view class="item" :style="{backgroundColor:colorList1[7]}" @click="info_open('010402')"></view>
				<view class="item" :style="{backgroundColor:colorList1[0]}" @click="info_open('010101')"></view><view class="item" :style="{backgroundColor:colorList1[1]}" @click="info_open('010201')"></view><view class="item" :style="{backgroundColor:colorList1[2]}" @click="info_open('0103101')"></view><view class="item" :style="{backgroundColor:colorList1[3]}" @click="info_open('010401')"></view>
			</view>
			<view class="cont" style="width: 75vw;display: flex;flex-wrap: wrap;" v-if="layer == 2">
				<view class="item" :style="{backgroundColor:colorList2[12]}" @click="info_open('020104')"></view><view class="item" :style="{backgroundColor:colorList2[13]}" @click="info_open('020204')"></view><view class="item" :style="{backgroundColor:colorList2[14]}" @click="info_open('020304')"></view><view class="item" :style="{backgroundColor:colorList2[15]}" @click="info_open('020404')"></view>
				<view class="item" :style="{backgroundColor:colorList2[8]}" @click="info_open('020103')"></view><view class="item" :style="{backgroundColor:colorList2[9]}" @click="info_open('020203')"></view><view class="item" :style="{backgroundColor:colorList2[10]}" @click="info_open('020303')"></view><view class="item" :style="{backgroundColor:colorList2[11]}" @click="info_open('020403')"></view>
				<view class="item" :style="{backgroundColor:colorList2[4]}" @click="info_open('020102')"></view><view class="item" :style="{backgroundColor:colorList2[5]}" @click="info_open('020202')"></view><view class="item" :style="{backgroundColor:colorList2[6]}" @click="info_open('020302')"></view><view class="item" :style="{backgroundColor:colorList2[7]}" @click="info_open('020402')"></view>
				<view class="item" :style="{backgroundColor:colorList2[0]}" @click="info_open('020101')"></view><view class="item" :style="{backgroundColor:colorList2[1]}" @click="info_open('020201')"></view><view class="item" :style="{backgroundColor:colorList2[2]}" @click="info_open('020301')"></view><view class="item" :style="{backgroundColor:colorList2[3]}" @click="info_open('020401')"></view>
			</view>
		</view>
		<view style="display: flex;margin-left: 15vw;">
			<view class="d"><text>01</text></view><view class="d"><text>02</text></view><view class="d"><text>03</text></view><view class="d"><text>04</text></view>
		</view>
		<view>
			<u-popup :show="info_show" @close="info_close" @open="info_open" mode="center">
				<scroll-view style="height: 60vh;width: 70vw;padding: 20px;" scroll-y>
					<view style="font-size: 20px; font-weight: bold;color: #787878;">集装箱信息</view>
					<view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 5vh;">集装箱号：{{ containerId }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">箱主：{{ owner }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">状态：{{ status }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">位置：{{ position }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">箱型：{{ type }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">国家：{{ country }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">货物：{{ cargo }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">重量：{{ weight }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">进场日期：{{ plannedArrival.substring(0,10) }}</view>
						<view style="font-size: 15px; font-weight: bold;color:#aeaeae;margin-top: 1vh;">进场时间：{{ plannedArrival.substring(11,19) }}</view>
						<image :src="imgSrc" style="margin-top: 3vh;max-width: 70vw;" mode="aspectFit"></image>
					</view>
				</scroll-view>
				<view style="display: flex;margin-bottom: 2vh;margin-top: 3vh;">
					<button style="background-color: #a52fbc; width: 60px; height: 28px;font-size: 12px;" type="primary" @click="outCont">出库</button>
					<button style="background-color: #27a1ff; width: 60px; height: 28px;font-size: 12px;" type="primary" @click="back">返回</button>
				</view>
			</u-popup>
		</view>
		<view>
			<u-popup :show="add_show" @close="add_close" @open="add_open" mode="center">
				<scroll-view style="height: 70vh;width: 70vw;padding: 20px;" scroll-y>
					<view style="font-size: 20px; font-weight: bold;color: #787878;">集装箱信息</view>
					<view style="display: flex;justify-content: space-between;">
						<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入集装箱号" v-model="add_containerId"/>
						<uni-icons custom-prefix="iconfont" type="camera-filled" size="30" @click="getContInfoById"></uni-icons>
					</view>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入箱主" v-model="add_owner"/>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入位置: 如A1010203" v-model="add_position"/>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入箱型" v-model="add_type"/>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入重量" v-model="add_weight"/>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入货物" v-model="add_cargo"/>
					<input style="border-bottom:1px solid #dadbde;margin-top: 3vh;" placeholder="输入国家" v-model="add_country"/>
					<view style="font-size: 15px;color:#979797;margin-top: 3vh;">进场时间:</view>
					<view class="example-body">
						<uni-datetime-picker type="datetime" v-model="add_plannedArrival" @change="changeLog" />
					</view>
					<view style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 2vh;">
						<view class="camera" @click="takePhoto">
							<image src="../../../static/camera.png" style="width: 30px; height: 30px;"></image>
						</view>
						<view style="font-size: 18px; color: #808080;display: flex;justify-content: center;">给集装箱拍照</view>
						<image :src="imagePath" mode="aspectFit"></image>
					</view>
				</scroll-view>
				<view style="display: flex;margin-bottom: 2vh;margin-top: 3vh;">
					<button style="background-color: #27a1ff; width: 60px; height: 28px;font-size: 12px;" type="primary" @click="enterCont">入库</button>
					<button style="background-color: #27a1ff; width: 60px; height: 28px;font-size: 12px;" type="primary" @click="back">返回</button>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script setup>
import request from "@/request/request.js";
import { onShow } from "@dcloudio/uni-app"
import {onMounted,ref,defineProps, watch,onUpdated, reactive} from 'vue';
const number = ref('');
const imagePath = ref('');
const containerId = ref('');
const owner = ref('');
const status = ref('');
const position = ref('');
const country = ref('')
const type = ref('');
const weight = ref('');
const bearing = ref('');
const cargo = ref('');
const plannedArrival = ref('');
const plannedLeave = ref('')
const add_containerId = ref('');
const add_owner = ref('');
const add_status = ref('');
const add_position = ref('');
const add_country = ref('')
const add_type = ref('');
const add_weight = ref('');
const add_bearing = ref('');
const add_cargo = ref('');
const add_plannedArrival = ref('');
const add_plannedLeave = ref('');
const add_imgSrc = ref('');
const imgSrc = ref('')
const searchText = ref('');
const add_show = ref(false);
const info_show = ref(false);
const layer = ref(1);
const nowPosition = ref('');
const position2 = ref('');
const isUsed = ref(0);
const props = defineProps({	
	area:{
		type:String,
		default:''
	}
});
const resData = ref([]);
const receiveArea = ref(props.area);
const receive = ref('');
const colorList1 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);
const colorList2 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);
onMounted( async()=>{
	try{
		const res = await request("/api/yard/display-containerInfo", "GET", {});
		if (res.code == "00000") {
			  resData.value = res.data.containerInfoList;
			  console.log('集装箱全部数据',resData.value);
		      processData(res.data.containerInfoList);
		    } else {
		}
		if(receiveArea.value[0] == 'A' || receiveArea.value[0] == 'B'){
			receive.value = receiveArea.value
		}
		if(receiveArea.value[0] == 'C'){
			receive.value = '冷藏'+receiveArea.value[1]
		}
		if(receiveArea.value[0] == 'D'){
			receive.value = '危险品'+receiveArea.value[1]
		}
		if(receiveArea.value[0] =='E'){
			receive.value = '其他'+receiveArea.value[1]
		}
	}catch(error){
		console.error('请求出错：', error);
	}
})
onShow(async()=>{
	try{
		console.log('onShow')
	}catch(error){
		console.error('请求出错：', error);
	}
})
//调取摄像头拍照
const takePhoto = async () => {
  try {
    const res = await uni.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['camera']
    });

    if (res.tempFiles.length > 0) {
      imagePath.value = res.tempFiles[0].path;
	  uploadPhoto();
    }
  } catch (err) {
    console.log('选择照片出错：', err);
  }
};
//上传照片获取url
const uploadPhoto = async () => {
  if (!imagePath.value) {
    console.log('请先拍照');
    return;
  }

  try {
    const res = await uni.uploadFile({
      url: 'https://cs.api.yuleng.top/api/upload',
      filePath: imagePath.value,
      name: 'file',
      formData: {
        fileType:2
      },
      header: {
        "Content-Type": "application/json", // 默认请求头
        Authorization: "Bearer " + uni.getStorageSync("token")
      }
    });

    if (res.statusCode === 200) {
      // console.log('上传成功');
      // console.log('返回的文件信息：', res.data);
	  add_imgSrc.value = JSON.parse(res.data).data.files[0].fileUrl;
      // 在这里可以将返回的文件信息存储起来或进行其他操作
    } else {
      console.log('上传失败', res);
    }
  } catch (err) {
    console.log('上传出错：', err);
  }
};
//根据箱号获取集装箱信息
async function getContInfoById(){
	try{
		const res = await request("/api/yard/get-containerInfoByNumber", "POST", {number:add_containerId.value});
		if(res.code == '00000' && res.data &&res.data.status != '堆场中'){
			isUsed.value = 1;
			add_containerId.value = res.data.number;
			add_owner.value = res.data.owner;
			add_status.value = res.data.status;
			add_position.value = res.data.position;
			add_type.value = res.data.type;
			add_weight.value = res.data.weight;
			add_bearing.value = res.data.bearing;
			add_imgSrc.value = res.data.picUrl;
			add_country.value = res.data.country;
			add_cargo.value = res.data.cargo;
			add_plannedArrival.value = res.data.plannedArrival;
			add_plannedLeave.value = res.data.plannedLeave;
		}else{
			add_owner.value = '';
			add_status.value = '';
			add_position.value = '';
			add_type.value = '';
			add_weight.value = '';
			add_bearing.value = '';
			add_imgSrc.value ='';
			add_country.value = '';
			add_cargo.value = '';
			add_plannedArrival.value = '';
			add_plannedLeave.value = '';
		}
	}catch(error){
		console.error('根据箱号获取信息失败：', error);
	}
}
//进场时间绑定函数
function changeLog(e) {
	// console.log('change事件:', e);
}
//处理集装箱数据
const processData = (res) =>{
	//目前所在区域的第几堆
	let nowArea = receiveArea.value[0];
	let nowIndex = receiveArea.value[1];
	for(let i = 0;i < res.length;i++){
		let position = res[i].position;
		//例子:c1010203,为c区第一堆第一层横坐标2纵坐标3
		let area = position[0];
		let index = position[1];//第几堆
		let layer = position.substring(3,4);
		let x = position.substring(5,6);
		let y = position.substring(7);
		let list_index = (y-1)*4+(x-1+1)-1;
		if(area == nowArea && res[i].status === '堆场中' && index == nowIndex){
			switch(layer){
				case '1':
					colorList1.value[list_index] = getColor(res[i].owner);
					break;
				case '2':
					colorList2.value[list_index] = getColor(res[i].owner);
					break;
			}
		}
	}
}
//姓名获取颜色
function getColor(name) {
  let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
  
    // 生成颜色的 RGB 值
    const red = (sum * 73) % 256;
    const green = (sum * 113) % 256;
    const blue = (sum * 163) % 256;
  
    // 将 RGB 值转换为颜色字符串
    const color = "#" + toHex(red) + toHex(green) + toHex(blue);
    return color;
}
// 辅助函数，将数值转换为两位十六进制字符串
function toHex(value) {
  const hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function add_open() {
  // console.log('open');
  add_show.value = true;
}
function add_close() {
  add_show.value = false;
  add_containerId.value = '';
  add_owner.value = '';
  add_status.value = '';
  add_position.value = '';
  add_type.value = '';
  add_weight.value = '';
  add_bearing.value = '';
  add_imgSrc.value ='';
  add_country.value = '';
  add_cargo.value = '';
  add_plannedArrival.value = '';
  add_plannedLeave.value = '';
  // console.log('close');
}
//展示集装箱信息
async function info_open(end_position) {
	try{
		nowPosition.value = receiveArea.value+end_position;
		if(end_position){
			const res = await request("/api/yard/get-containerInfoByPosition", "POST", {position:nowPosition.value});
			if (res.code == "00000" && res.data && res.data.status == '堆场中') {
				number.value = res.data.containerId;
				containerId.value = res.data.number;
				owner.value = res.data.owner;
				status.value = res.data.status;
				position.value = res.data.position[1]+'-'+res.data.position[3]+'-'+res.data.position[5]+'0'+res.data.position[7];
				type.value = res.data.type;
				weight.value = res.data.weight+'kg';
				bearing.value = res.data.bearing+'kg';
				imgSrc.value = res.data.picUrl;
				country.value = res.data.country;
				cargo.value = res.data.cargo;
				plannedArrival.value = res.data.plannedArrival.substring(0,10)+' '+res.data.plannedArrival.substring(11,19,);
				plannedLeave.value = res.data.plannedLeave;
				info_show.value = true;
			}
			console.log('展示函数position',nowPosition.value);
		}
	}catch(error) {
    console.error('集装箱信息失败：', error);
  }
}
function info_close() {
  info_show.value = false
  console.log('关闭')
  // console.log('close');
}
async function enter(){
	try{
		const res = await request("/api/yard/add-container", "POST", {
				  number:add_containerId.value,
				  owner:add_owner.value,
				  type:add_type.value,
				  weight:parseInt(add_weight.value,10),
				  bearing:parseInt(add_bearing,10),
				  picUrl:add_imgSrc.value,
				  position:add_position.value,
				  cargo:add_cargo.value,
				  country:add_country.value,
				  plannedArrival:add_plannedArrival.value.substring(0,10)+'T'+add_plannedArrival.value.substring(11,19)+'.000+00:00',
				  plannedLeave:'2023-01-01T00:00:00.000+00:00'
		});
		if(res.code == '00000'&& res.message == '请求正常'){
			return res;
		}else if(res.code == 'A0400' && res.message == '此箱号已存在，不能进行新增操作'){
			return res;
		}
	}catch (error) {
    console.error('入库失败1：', error);
  }
}

//入库函数
async function enterCont() {
  try{
		  const res = await enter();
		  console.log('enter res',res);
		  if(res){
		  		  //例子:c1010203,为c区第一堆第一层横坐标2纵坐标3
		  		  let area = add_position.value[0];
		  		  let index = add_position.value[1];//第几堆
		  		  let layer = add_position.value.substring(3,4);
		  		  let x = add_position.value.substring(5,6);
		  		  let y = add_position.value.substring(7);
		  		  let list_index = (y-1)*4+(x-1+1)-1;
				  let color = getColor(add_owner.value);
		  		  if(layer == '1'){
		  		  		  colorList1.value[list_index] = color;
		  		  }else{
		  		  		  colorList2.value[list_index] = color;
		  		  }
				  add_show.value = false;
				  add_containerId.value = '';
				  add_owner.value = '';
				  add_status.value = '';
				  add_position.value = '';
				  add_type.value = '';
				  add_weight.value = '';
				  add_bearing.value = '';
				  add_imgSrc.value ='';
				  add_country.value = '';
				  add_cargo.value = '';
				  add_plannedArrival.value = '';
				  add_plannedLeave.value = '';
			}
			else if(res.code == 'A0400' && res.message == '此箱号已存在，不能进行新增操作'){
				for(let i =0;i<resData.value.length;i++){
					if(add_containerId.value = resData.value[i].number && resData.value[i].status != '堆场中'){
						const res = await request("/api/yard/operation-container/", "POST", {containerId:resData.value[i].containerId,operationType:'入库',location:resData.value[i].position});
						let area = add_position.value[0];
						let index = add_position.value[1];//第几堆
						let layer = add_position.value.substring(3,4);
						let x = add_position.value.substring(5,6);
						let y = add_position.value.substring(7);
						let list_index = (y-1)*4+(x-1+1)-1;
						if(layer == '1'){
								  colorList1.value[list_index] = getColor(add_owner.value);
						}else{
								  colorList2.value[list_index] = getColor(add_owner.value);
						}
						add_show.value = false;
						add_show.value = false;
						add_containerId.value = '';
						add_owner.value = '';
						add_status.value = '';
						add_position.value = '';
						add_type.value = '';
						add_weight.value = '';
						add_bearing.value = '';
						add_imgSrc.value ='';
						add_country.value = '';
						add_cargo.value = '';
						add_plannedArrival.value = '';
						add_plannedLeave.value = '';
						break;
					}
				}
				// 
			}else{
				console.log('入库失败');
			}
	  // }

	  
  } catch (error) {
    console.error('入库失败2：', error);
  }
}
async function out(){
	try{
		const res = await request("/api/yard/operation-container/", "POST", {containerId:number.value,operationType:'出库',location:nowPosition.value});
		if(res.code == '00000'&& res.message == '请求正常'){
			return res;
		}
	}catch(error){
		 console.error('出库失败：', error);
	}
}
//出库函数
async function outCont() {
  try{
	  const res = await out()
	  if(res){
	  //position.value为4-1-301,即堆场-层-横坐标＋纵坐标
	  let layer = position.value[2];
	  let x = position.value[4];
	  let y = position.value[6];
	  let list_index = (y-1)*4+(x-1+1)-1;
	  if(layer == '1'){
	  		  colorList1.value[list_index] = '#fff';
	  }else{
	  		  colorList2.value[list_index] = '#fff';
	  }
	  info_show.value = false;
	  }
  } catch (error) {
    console.error('出库失败：', error);
  }
}
//返回函数
function back() {
  info_show.value = false;
  add_show.value = false;
  add_containerId.value = '';
  add_owner.value = '';
  add_status.value = '';
  add_position.value = '';
  add_type.value = '';
  add_weight.value = '';
  add_bearing.value = '';
  add_imgSrc.value ='';
  add_country.value = '';
  add_cargo.value = '';
  add_plannedArrival.value = '';
  add_plannedLeave.value = '';
}
// 调用接口进行搜索并获取数据
async function searchContainerData(searchText) {
  console.log('containerNumber',searchText)
  return {searchText:searchText}
}
// 当点击搜索或回车
async function onSearch(value) {
  console.log(value);
  try {
    // 调用接口进行搜索并获取数据
    const data = await searchContainerData(containerNumber.value);
	  console.log('data',data)
    // 将数据存储到本地
    uni.setStorageSync('containerData', JSON.stringify(data));
    console.log('containerData',uni.getStorageSync('containerData'));
    // 跳转至数据展示页面，并将数据作为URL参数传递
    uni.navigateTo({
      url: '/pages/index/containerDetail/containerDetail?data=' + encodeURIComponent(JSON.stringify(data)),
    });
  } catch (error) {
    console.error('搜索出错：', error);
  }
}
//跳转至异常界面
async function toAbnormity() {
	try{
		uni.navigateTo({
		  url: '/pages/containerManagement/error/error',
		});
	} catch (error) {
    console.error('跳转失败：', error);
  }
}
//跳转至统计界面
async function toAnalist() {
  try {
    uni.navigateTo({
      url: '/pages/containerManagement/anlist/anlist',
    });
  } catch (error) {
    console.error('跳转失败：', error);
  }
}
function onContainerNumberChange(value) {
  console.log(value);
}
function nextLayer(index) {
	layer.value = index;
}
function lastLayer(index) {
	layer.value = index;
}
</script>

<style scoped lang="scss">
.navigation {
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 6vh;
	.title {
		margin-top: 3vh;
		margin-left: 15px;
		font-weight: bold;
	}
	.nav-icon {
		margin-right: 10px;
		.icon-error:active {
			background-color: #f2f2f2;
		}
		.icon-anlist:active {
			background-color: #f2f2f2;
		}
	}
	image {
		margin-top: 3vh;
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
}
.search-bar{
  width: 90vw;
  height: 10vh;
  margin-top: 4vh;
  margin-left: 5vw;
}
.add-btn {
	float: right;
	width: 50px;
	height: 50px;
	margin: -2vh 5vw 1vh 0vw;
}
.t{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 13vh;
	font-size: 25px;
	width: 12vw;
}
	
.d {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	width: 18vw;
}
.item {
	border: 1px solid #d7d7d7;
	height: 13vh;
	width: 18vw;
}
.camera {
	display: flex;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #fff;
	justify-content: center;
	box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
	align-items: center;
}
.camera:active {
	background-color: #d7d7d7;
}
</style>
