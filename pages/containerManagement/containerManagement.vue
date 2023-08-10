<template>
	<view class="container" >
		<view style="position: fixed;background-color: #fff;">
			<view style="height: 4vh;"></view>
			<view class="navigation">
				<text class="title">堆场管理</text>
				<view class="nav-icon">
					<image src="../../static/error.png" class="icon-error" @click="toAbnormity"></image>
					<image src="../../static/analist.png" class="icon-anlist" @click="toAnalist"></image>
				</view>
			</view>
			<view class="search-bar">
			  <u-search shape="round" :show-action="false" :clearabled="true" v-model="searchText" placeholder="箱号/地址/区域/类型" @change="onContainerNumberChange" @search="onSearch" @custom="onSearch">
			  </u-search>
			</view>
		</view>
		<view style="height: 1vh;"></view>
		<view class="area-A area">
			<view>A区</view>
			<view class="A-col-1 col-1">
				<view class="a-1 container2" @click = "toContanPage('A1')">
					<view>1</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList1[12]}" class="item"></view><view :style="{backgroundColor:colorList1[13]}" class="item"></view><view :style="{backgroundColor:colorList1[14]}" class="item"></view><view :style="{backgroundColor:colorList1[15]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[8]}" class="item"></view><view :style="{backgroundColor:colorList1[9]}" class="item"></view><view :style="{backgroundColor:colorList1[10]}" class="item"></view><view :style="{backgroundColor:colorList1[11]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[4]}" class="item"></view><view :style="{backgroundColor:colorList1[5]}" class="item"></view><view :style="{backgroundColor:colorList1[6]}" class="item"></view><view :style="{backgroundColor:colorList1[7]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[0]}" class="item"></view><view :style="{backgroundColor:colorList1[1]}" class="item"></view><view :style="{backgroundColor:colorList1[2]}" class="item"></view><view :style="{backgroundColor:colorList1[3]}" class="item"></view>
					</view>
				</view>
				<view class="a-3 container2" @click = "toContanPage('A3')">
					<view>3</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList1[44]}" class="item"></view><view :style="{backgroundColor:colorList1[45]}" class="item"></view><view :style="{backgroundColor:colorList1[46]}" class="item"></view><view :style="{backgroundColor:colorList1[47]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[40]}" class="item"></view><view :style="{backgroundColor:colorList1[41]}" class="item"></view><view :style="{backgroundColor:colorList1[42]}" class="item"></view><view :style="{backgroundColor:colorList1[43]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[36]}" class="item"></view><view :style="{backgroundColor:colorList1[37]}" class="item"></view><view :style="{backgroundColor:colorList1[38]}" class="item"></view><view :style="{backgroundColor:colorList1[39]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[32]}" class="item"></view><view :style="{backgroundColor:colorList1[33]}" class="item"></view><view :style="{backgroundColor:colorList1[34]}" class="item"></view><view :style="{backgroundColor:colorList1[35]}" class="item"></view>
						
					</view>
				</view>
				<view class="a-5 container2" @click = "toContanPage('A5')">
					<view>5</view>
					<view class="A-container container1">
							<view :style="{backgroundColor:colorList1[76]}" class="item"></view><view :style="{backgroundColor:colorList1[77]}" class="item"></view><view :style="{backgroundColor:colorList1[78]}" class="item"></view><view :style="{backgroundColor:colorList1[79]}" class="item"></view>
							<view :style="{backgroundColor:colorList1[72]}" class="item"></view><view :style="{backgroundColor:colorList1[73]}" class="item"></view><view :style="{backgroundColor:colorList1[74]}" class="item"></view><view :style="{backgroundColor:colorList1[75]}" class="item"></view>
							<view :style="{backgroundColor:colorList1[68]}" class="item"></view><view :style="{backgroundColor:colorList1[69]}" class="item"></view><view :style="{backgroundColor:colorList1[70]}" class="item"></view><view :style="{backgroundColor:colorList1[71]}" class="item"></view>
							<view :style="{backgroundColor:colorList1[64]}" class="item"></view><view :style="{backgroundColor:colorList1[65]}" class="item"></view><view :style="{backgroundColor:colorList1[66]}" class="item"></view><view :style="{backgroundColor:colorList1[67]}" class="item"></view>
							
					</view>
				</view>
			</view>
			<view class="A-col-2">
				<view class="a-2 container2" @click = "toContanPage('A2')">
					<view>2</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList1[28]}" class="item"></view><view :style="{backgroundColor:colorList1[29]}" class="item"></view><view :style="{backgroundColor:colorList1[30]}" class="item"></view><view :style="{backgroundColor:colorList1[31]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[24]}" class="item"></view><view :style="{backgroundColor:colorList1[25]}" class="item"></view><view :style="{backgroundColor:colorList1[26]}" class="item"></view><view :style="{backgroundColor:colorList1[27]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[20]}" class="item"></view><view :style="{backgroundColor:colorList1[21]}" class="item"></view><view :style="{backgroundColor:colorList1[22]}" class="item"></view><view :style="{backgroundColor:colorList1[23]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[16]}" class="item"></view><view :style="{backgroundColor:colorList1[17]}" class="item"></view><view :style="{backgroundColor:colorList1[18]}" class="item"></view><view :style="{backgroundColor:colorList1[19]}" class="item"></view>
					
					</view>
				</view>
				<view class="a-4 container2" @click = "toContanPage('A4')">
					<view>4</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList1[60]}" class="item"></view><view :style="{backgroundColor:colorList1[61]}" class="item"></view><view :style="{backgroundColor:colorList1[62]}" class="item"></view><view :style="{backgroundColor:colorList1[63]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[56]}" class="item"></view><view :style="{backgroundColor:colorList1[57]}" class="item"></view><view :style="{backgroundColor:colorList1[58]}" class="item"></view><view :style="{backgroundColor:colorList1[59]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[52]}" class="item"></view><view :style="{backgroundColor:colorList1[53]}" class="item"></view><view :style="{backgroundColor:colorList1[54]}" class="item"></view><view :style="{backgroundColor:colorList1[55]}" class="item"></view>
						<view :style="{backgroundColor:colorList1[48]}" class="item"></view><view :style="{backgroundColor:colorList1[49]}" class="item"></view><view :style="{backgroundColor:colorList1[50]}" class="item"></view><view :style="{backgroundColor:colorList1[51]}" class="item"></view>
					</view>
				</view>
				<view class="a-6 container2" @click = "toContanPage('A6')">
					<view>6</view>
					<view class="A-container container1">
							<view :style="{backgroundColor:colorList1[92]}" class="item"></view><view :style="{backgroundColor:colorList1[93]}" class="item"></view><view :style="{backgroundColor:colorList1[94]}" class="item"></view><view :style="{backgroundColor:colorList1[95]}" class="item"></view>
								<view :style="{backgroundColor:colorList1[88]}" class="item"></view><view :style="{backgroundColor:colorList1[89]}" class="item"></view><view :style="{backgroundColor:colorList1[90]}" class="item"></view><view :style="{backgroundColor:colorList1[91]}" class="item"></view>
								<view :style="{backgroundColor:colorList1[84]}" class="item"></view><view :style="{backgroundColor:colorList1[85]}" class="item"></view><view :style="{backgroundColor:colorList1[86]}" class="item"></view><view :style="{backgroundColor:colorList1[87]}" class="item"></view>
								<view :style="{backgroundColor:colorList1[80]}" class="item"></view><view :style="{backgroundColor:colorList1[81]}" class="item"></view><view :style="{backgroundColor:colorList1[82]}" class="item"></view><view :style="{backgroundColor:colorList1[83]}" class="item"></view>
							
					</view>
				</view>
			</view>
		</view>
		<view class="area-B area">
			<view>B区</view>
			<view class="A-col-1 col-1">
				<view class="a-1 container2">
					<view>1</view>
					<view class="A-container container1" @click = "toContanPage('B1')">
						<view :style="{backgroundColor:colorList2[12]}" class="item"></view><view :style="{backgroundColor:colorList2[13]}" class="item"></view><view :style="{backgroundColor:colorList2[14]}" class="item"></view><view :style="{backgroundColor:colorList2[15]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[8]}" class="item"></view><view :style="{backgroundColor:colorList2[9]}" class="item"></view><view :style="{backgroundColor:colorList2[10]}" class="item"></view><view :style="{backgroundColor:colorList2[11]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[4]}" class="item"></view><view :style="{backgroundColor:colorList2[5]}" class="item"></view><view :style="{backgroundColor:colorList2[6]}" class="item"></view><view :style="{backgroundColor:colorList2[7]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[0]}" class="item"></view><view :style="{backgroundColor:colorList2[1]}" class="item"></view><view :style="{backgroundColor:colorList2[2]}" class="item"></view><view :style="{backgroundColor:colorList2[3]}" class="item"></view>
						</view>
				</view>
				<view class="a-3 container2">
					<view>3</view>
					<view class="A-container container1" @click = "toContanPage('B3')">
						<view :style="{backgroundColor:colorList2[44]}" class="item"></view><view :style="{backgroundColor:colorList2[45]}" class="item"></view><view :style="{backgroundColor:colorList2[46]}" class="item"></view><view :style="{backgroundColor:colorList2[47]}" class="item"></view>
						<view :style="{backgroundColor:colorList2[40]}" class="item"></view><view :style="{backgroundColor:colorList2[41]}" class="item"></view><view :style="{backgroundColor:colorList2[42]}" class="item"></view><view :style="{backgroundColor:colorList2[43]}" class="item"></view>
						<view :style="{backgroundColor:colorList2[36]}" class="item"></view><view :style="{backgroundColor:colorList2[37]}" class="item"></view><view :style="{backgroundColor:colorList2[38]}" class="item"></view><view :style="{backgroundColor:colorList2[39]}" class="item"></view>
						<view :style="{backgroundColor:colorList2[32]}" class="item"></view><view :style="{backgroundColor:colorList2[33]}" class="item"></view><view :style="{backgroundColor:colorList2[34]}" class="item"></view><view :style="{backgroundColor:colorList2[35]}" class="item"></view>
					</view>
				</view>
			</view>
			<view class="A-col-2">
				<view class="a-2 container2">
					<view>2</view>
					<view class="A-container container1" @click = "toContanPage('B2')">
							<view :style="{backgroundColor:colorList2[28]}" class="item"></view><view :style="{backgroundColor:colorList2[29]}" class="item"></view><view :style="{backgroundColor:colorList2[30]}" class="item"></view><view :style="{backgroundColor:colorList2[31]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[24]}" class="item"></view><view :style="{backgroundColor:colorList2[25]}" class="item"></view><view :style="{backgroundColor:colorList2[26]}" class="item"></view><view :style="{backgroundColor:colorList2[27]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[20]}" class="item"></view><view :style="{backgroundColor:colorList2[21]}" class="item"></view><view :style="{backgroundColor:colorList2[22]}" class="item"></view><view :style="{backgroundColor:colorList2[23]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[16]}" class="item"></view><view :style="{backgroundColor:colorList2[17]}" class="item"></view><view :style="{backgroundColor:colorList2[18]}" class="item"></view><view :style="{backgroundColor:colorList2[19]}" class="item"></view>
					</view>
				</view>
				<view class="a-4 container2">
					<view>4</view>
					<view class="A-container container1" @click = "toContanPage('B4')">
						<view :style="{backgroundColor:colorList2[60]}" class="item"></view><view :style="{backgroundColor:colorList2[61]}" class="item"></view><view :style="{backgroundColor:colorList2[62]}" class="item"></view><view :style="{backgroundColor:colorList2[63]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[56]}" class="item"></view><view :style="{backgroundColor:colorList2[57]}" class="item"></view><view :style="{backgroundColor:colorList2[58]}" class="item"></view><view :style="{backgroundColor:colorList2[59]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[52]}" class="item"></view><view :style="{backgroundColor:colorList2[53]}" class="item"></view><view :style="{backgroundColor:colorList2[54]}" class="item"></view><view :style="{backgroundColor:colorList2[55]}" class="item"></view>
							<view :style="{backgroundColor:colorList2[48]}" class="item"></view><view :style="{backgroundColor:colorList2[49]}" class="item"></view><view :style="{backgroundColor:colorList2[50]}" class="item"></view><view :style="{backgroundColor:colorList2[51]}" class="item"></view>
						</view>
				</view>
			</view>
		</view>
		<view class="area-refriger area">
			<view class="text">冷藏品区</view>
			<view class="A-col-1 col-1">
				<view class="a-1 container2"  @click = "toContanPage('C1')">
					<view>1</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList3[12]}" class="item"></view><view :style="{backgroundColor:colorList3[13]}" class="item"></view><view :style="{backgroundColor:colorList3[14]}" class="item"></view><view :style="{backgroundColor:colorList3[15]}" class="item"></view>
							<view :style="{backgroundColor:colorList3[8]}" class="item"></view><view :style="{backgroundColor:colorList3[9]}" class="item"></view><view :style="{backgroundColor:colorList3[10]}" class="item"></view><view :style="{backgroundColor:colorList3[11]}" class="item"></view>
							<view :style="{backgroundColor:colorList3[4]}" class="item"></view><view :style="{backgroundColor:colorList3[5]}" class="item"></view><view :style="{backgroundColor:colorList3[6]}" class="item"></view><view :style="{backgroundColor:colorList3[7]}" class="item"></view>
							<view :style="{backgroundColor:colorList3[0]}" class="item"></view><view :style="{backgroundColor:colorList3[1]}" class="item"></view><view :style="{backgroundColor:colorList3[2]}" class="item"></view><view :style="{backgroundColor:colorList3[3]}" class="item"></view>
						</view>
				</view>
				<view class="a-3 container2"  @click = "toContanPage('C3')">
					<view>3</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList3[44]}" class="item"></view><view :style="{backgroundColor:colorList3[45]}" class="item"></view><view :style="{backgroundColor:colorList3[46]}" class="item"></view><view :style="{backgroundColor:colorList3[47]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[40]}" class="item"></view><view :style="{backgroundColor:colorList3[41]}" class="item"></view><view :style="{backgroundColor:colorList3[42]}" class="item"></view><view :style="{backgroundColor:colorList3[43]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[36]}" class="item"></view><view :style="{backgroundColor:colorList3[37]}" class="item"></view><view :style="{backgroundColor:colorList3[38]}" class="item"></view><view :style="{backgroundColor:colorList3[39]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[32]}" class="item"></view><view :style="{backgroundColor:colorList3[33]}" class="item"></view><view :style="{backgroundColor:colorList3[34]}" class="item"></view><view :style="{backgroundColor:colorList3[35]}" class="item"></view>
					</view>
				</view>
			</view>
			<view class="A-col-2">
				<view class="a-2 container2"  @click = "toContanPage('C2')">
					<view>2</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList3[28]}" class="item"></view><view :style="{backgroundColor:colorList3[29]}" class="item"></view><view :style="{backgroundColor:colorList3[30]}" class="item"></view><view :style="{backgroundColor:colorList3[31]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[24]}" class="item"></view><view :style="{backgroundColor:colorList3[25]}" class="item"></view><view :style="{backgroundColor:colorList3[26]}" class="item"></view><view :style="{backgroundColor:colorList3[27]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[20]}" class="item"></view><view :style="{backgroundColor:colorList3[21]}" class="item"></view><view :style="{backgroundColor:colorList3[22]}" class="item"></view><view :style="{backgroundColor:colorList3[23]}" class="item"></view>
						<view :style="{backgroundColor:colorList3[16]}" class="item"></view><view :style="{backgroundColor:colorList3[17]}" class="item"></view><view :style="{backgroundColor:colorList3[18]}" class="item"></view><view :style="{backgroundColor:colorList3[19]}" class="item"></view>
					
						
					</view>
				</view>
			</view>
		</view>
		<view class="area-danger area">
			<view class="text">危险品区</view>
			<view class="A-col-1 col-1">
				<view class="a-1 container2" @click = "toContanPage('D1')">
					<view>1</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList4[12]}" class="item"></view><view :style="{backgroundColor:colorList4[13]}" class="item"></view><view :style="{backgroundColor:colorList3[14]}" class="item"></view><view :style="{backgroundColor:colorList4[15]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[8]}" class="item"></view><view :style="{backgroundColor:colorList4[9]}" class="item"></view><view :style="{backgroundColor:colorList3[10]}" class="item"></view><view :style="{backgroundColor:colorList4[11]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[4]}" class="item"></view><view :style="{backgroundColor:colorList4[5]}" class="item"></view><view :style="{backgroundColor:colorList3[6]}" class="item"></view><view :style="{backgroundColor:colorList4[7]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[0]}" class="item"></view><view :style="{backgroundColor:colorList4[1]}" class="item"></view><view :style="{backgroundColor:colorList3[2]}" class="item"></view><view :style="{backgroundColor:colorList4[3]}" class="item"></view>
					</view>
				</view>
				<view class="a-3 container2" @click = "toContanPage('D3')">
					<view>3</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList4[44]}" class="item"></view><view :style="{backgroundColor:colorList4[45]}" class="item"></view><view :style="{backgroundColor:colorList4[46]}" class="item"></view><view :style="{backgroundColor:colorList4[47]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[40]}" class="item"></view><view :style="{backgroundColor:colorList4[41]}" class="item"></view><view :style="{backgroundColor:colorList4[42]}" class="item"></view><view :style="{backgroundColor:colorList4[43]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[36]}" class="item"></view><view :style="{backgroundColor:colorList4[37]}" class="item"></view><view :style="{backgroundColor:colorList4[38]}" class="item"></view><view :style="{backgroundColor:colorList4[39]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[32]}" class="item"></view><view :style="{backgroundColor:colorList4[33]}" class="item"></view><view :style="{backgroundColor:colorList4[34]}" class="item"></view><view :style="{backgroundColor:colorList4[35]}" class="item"></view>
					</view>
				</view>
			</view>
			<view class="A-col-2">
				<view class="a-2 container2" @click = "toContanPage('D2')">
					<view>2</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList4[28]}" class="item"></view><view :style="{backgroundColor:colorList4[29]}" class="item"></view><view :style="{backgroundColor:colorList3[30]}" class="item"></view><view :style="{backgroundColor:colorList4[31]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[24]}" class="item"></view><view :style="{backgroundColor:colorList4[25]}" class="item"></view><view :style="{backgroundColor:colorList3[26]}" class="item"></view><view :style="{backgroundColor:colorList4[27]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[20]}" class="item"></view><view :style="{backgroundColor:colorList4[21]}" class="item"></view><view :style="{backgroundColor:colorList3[22]}" class="item"></view><view :style="{backgroundColor:colorList4[23]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[16]}" class="item"></view><view :style="{backgroundColor:colorList4[17]}" class="item"></view><view :style="{backgroundColor:colorList3[18]}" class="item"></view><view :style="{backgroundColor:colorList4[19]}" class="item"></view>
						
					</view>
				</view>
				<view class="a-4 container2" @click = "toContanPage('D4')">
					<view>4</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList4[60]}" class="item"></view><view :style="{backgroundColor:colorList4[61]}" class="item"></view><view :style="{backgroundColor:colorList4[62]}" class="item"></view><view :style="{backgroundColor:colorList4[63]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[56]}" class="item"></view><view :style="{backgroundColor:colorList4[57]}" class="item"></view><view :style="{backgroundColor:colorList4[58]}" class="item"></view><view :style="{backgroundColor:colorList4[59]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[52]}" class="item"></view><view :style="{backgroundColor:colorList4[53]}" class="item"></view><view :style="{backgroundColor:colorList4[54]}" class="item"></view><view :style="{backgroundColor:colorList4[55]}" class="item"></view>
						<view :style="{backgroundColor:colorList4[48]}" class="item"></view><view :style="{backgroundColor:colorList4[49]}" class="item"></view><view :style="{backgroundColor:colorList4[50]}" class="item"></view><view :style="{backgroundColor:colorList4[51]}" class="item"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="area-other area">
			<view class="text">其他区</view>
			<view class="A-col-1 col-1">
				<view class="a-1 container2"  @click = "toContanPage('E1')">
					<view>1</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList5[12]}" class="item"></view><view :style="{backgroundColor:colorList5[13]}" class="item"></view><view :style="{backgroundColor:colorList5[14]}" class="item"></view><view :style="{backgroundColor:colorList5[15]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[8]}" class="item"></view><view :style="{backgroundColor:colorList4[9]}" class="item"></view><view :style="{backgroundColor:colorList3[10]}" class="item"></view><view :style="{backgroundColor:colorList3[11]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[4]}" class="item"></view><view :style="{backgroundColor:colorList4[5]}" class="item"></view><view :style="{backgroundColor:colorList3[6]}" class="item"></view><view :style="{backgroundColor:colorList3[7]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[0]}" class="item"></view><view :style="{backgroundColor:colorList4[1]}" class="item"></view><view :style="{backgroundColor:colorList3[2]}" class="item"></view><view :style="{backgroundColor:colorList3[3]}" class="item"></view>
					</view>                                     
				</view>                                         
				<view class="a-3 container2"  @click = "toContanPage('E3')">                   
					<view>3</view>                              
					<view class="A-container container1">       
						<view :style="{backgroundColor:colorList5[44]}" class="item"></view><view :style="{backgroundColor:colorList4[45]}" class="item"></view><view :style="{backgroundColor:colorList5[46]}" class="item"></view><view :style="{backgroundColor:colorList5[47]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[40]}" class="item"></view><view :style="{backgroundColor:colorList4[41]}" class="item"></view><view :style="{backgroundColor:colorList5[42]}" class="item"></view><view :style="{backgroundColor:colorList5[43]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[36]}" class="item"></view><view :style="{backgroundColor:colorList4[37]}" class="item"></view><view :style="{backgroundColor:colorList5[38]}" class="item"></view><view :style="{backgroundColor:colorList5[39]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[32]}" class="item"></view><view :style="{backgroundColor:colorList4[33]}" class="item"></view><view :style="{backgroundColor:colorList5[34]}" class="item"></view><view :style="{backgroundColor:colorList5[35]}" class="item"></view>
					</view>                                     
				</view>                                         
			</view>                                             
			<view class="A-col-2">                              
				<view class="a-2 container2"  @click = "toContanPage('E2')">                   
					<view>2</view>                              
					<view class="A-container container1">      
						 <view :style="{backgroundColor:colorList5[28]}" class="item"></view><view :style="{backgroundColor:colorList4[29]}" class="item"></view><view :style="{backgroundColor:colorList3[30]}" class="item"></view><view :style="{backgroundColor:colorList5[31]}" class="item"></view>
						 <view :style="{backgroundColor:colorList5[24]}" class="item"></view><view :style="{backgroundColor:colorList4[25]}" class="item"></view><view :style="{backgroundColor:colorList3[26]}" class="item"></view><view :style="{backgroundColor:colorList5[27]}" class="item"></view>
						 <view :style="{backgroundColor:colorList5[20]}" class="item"></view><view :style="{backgroundColor:colorList4[21]}" class="item"></view><view :style="{backgroundColor:colorList3[22]}" class="item"></view><view :style="{backgroundColor:colorList5[23]}" class="item"></view>
						 <view :style="{backgroundColor:colorList5[16]}" class="item"></view><view :style="{backgroundColor:colorList4[17]}" class="item"></view><view :style="{backgroundColor:colorList3[18]}" class="item"></view><view :style="{backgroundColor:colorList5[19]}" class="item"></view>
					 
						
					</view>
				</view>
				<view class="a-4 container2" @click = "toContanPage('E4')">
					<view>4</view>
					<view class="A-container container1">
						<view :style="{backgroundColor:colorList5[60]}" class="item"></view><view :style="{backgroundColor:colorList4[61]}" class="item"></view><view :style="{backgroundColor:colorList5[62]}" class="item"></view><view :style="{backgroundColor:colorList5[63]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[56]}" class="item"></view><view :style="{backgroundColor:colorList4[57]}" class="item"></view><view :style="{backgroundColor:colorList5[58]}" class="item"></view><view :style="{backgroundColor:colorList5[59]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[52]}" class="item"></view><view :style="{backgroundColor:colorList4[53]}" class="item"></view><view :style="{backgroundColor:colorList5[54]}" class="item"></view><view :style="{backgroundColor:colorList5[55]}" class="item"></view>
						<view :style="{backgroundColor:colorList5[48]}" class="item"></view><view :style="{backgroundColor:colorList4[49]}" class="item"></view><view :style="{backgroundColor:colorList5[50]}" class="item"></view><view :style="{backgroundColor:colorList5[51]}" class="item"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import request from "@/request/request.js";
import { onShow } from "@dcloudio/uni-app"
import { ref,onMounted } from 'vue';
const searchText = ref('');
const bar = ref('  ')
const color = ref('');
const colorList1 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);
const colorList2 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff']);
const colorList3 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']);
const colorList4 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff']);
const colorList5 = ref(['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'
						,'#fff','#fff','#fff','#fff']);

async function a(){
	try{
		const res = await request("/api/yard/display-containerInfo", "GET", {});
		return res;
	}catch(error){
		console.error('请求出错：', error);
	}
}
onMounted( async()=>{
	try{
		const res = await a();
		if (res.code == "00000") {
		     await processData(res.data.containerInfoList);
		    } else {
		}
		
	}catch(error){
		console.error('请求出错：', error);
	}
})
onShow(async()=>{
	try{
		const res = await a();
		if (res.code == "00000") {
			  await clearColor(res.data.containerInfoList);
		      await processData(res.data.containerInfoList);
		    } else {
		}
		
	}catch(error){
		console.error('请求出错：', error);
	}
})
//清空方块颜色
async function clearColor(res){
	try{
		for(let i = 0;i < res.length;i++){
			let position = res[i].position;
			let area = position[0];
			let index = position[1];
			let layer = position.substring(3,4);
			let x = position.substring(5,6);
			let y = position.substring(7);
			let list_index = 16*(index-1)+(y-1)*4+(x-1+1)-1;
			if(layer == 1){
				switch(area){
					case 'A':
						colorList1.value[list_index] = '#fff';
						break;
					case 'B':
						colorList2.value[list_index] = '#fff';
						break;
					case 'C':
						colorList3.value[list_index] = '#fff';
						break;
					case 'D':
						colorList4.value[list_index] = '#fff';
						break;
					case 'E':
						colorList5.value[list_index] = '#fff';
						break;
				}
			}
		}
	}catch(error){
		console.log('---',error);
	}
	
}
//处理集装箱数据
async function processData(res){
	try{
		for(let i = 0;i < res.length;i++){
			let position = res[i].position;
			let area = position[0];
			let index = position[1];
			let layer = position.substring(3,4);
			let x = position.substring(5,6);
			let y = position.substring(7);
			let list_index = 16*(index-1)+(y-1)*4+(x-1+1)-1;
			if(layer == 1 && res[i].status === '堆场中'){
				switch(area){
					case 'A':
						colorList1.value[list_index] = await getColor(res[i].owner);
						break;
					case 'B':
						colorList2.value[list_index] = await getColor(res[i].owner);
						break;
					case 'C':
						colorList3.value[list_index] = await getColor(res[i].owner);
						break;
					case 'D':
						colorList4.value[list_index] = await getColor(res[i].owner);
						break;
					case 'E':
						colorList5.value[list_index] = await getColor(res[i].owner);
						break;
				}
			}
		}
	}catch(error){
		console.log('---',error);
	}
	
}
//姓名获取颜色
async function getColor(name) {
	try{
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
	}catch(error){
		console.log('---',error);
	}
}
// 辅助函数，将数值转换为两位十六进制字符串
function toHex(value) {
  const hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
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
//跳转至堆场管理界面
async function toContanPage(area) {
	try{
		uni.navigateTo({
		  url: '/pages/containerManagement/contanPage/contanPage?area='+area,
		});
	}catch(error) {
		console.error('跳转失败：', error);
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
.area-A {
	margin-top: 25vh;
}
.area {
	display: flex;
	font-size: 17px;
	font-weight: bold;
	margin-left: 5vw;
	margin-bottom: 5vh;
}
.area1 {
	margin-left: -2vw;
}
.col-1 {
	margin:0vh 5vw 5vh 5vw;
}
.container2 {
	display: flex;
}
.container1 {
	display: flex;
	flex-wrap: wrap;
	width: 96px;
	height: 36px;
	margin:1vh 0vw 3vh 2vw;
}
.text {
	width: 28px;
}
.item {
	height:9px;
	width:22px;
	border: 1px solid #cfcfcf;
	}
</style>
