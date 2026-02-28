<template>
	<div class="myContent">
		<div class="myBody" style="width: 45vw;">
			<Title>
				<span slot="title">主要物联网指标</span>
			</Title>
			<div class="contentBody" style="position: relative;">
				<div class="btnGroup">
					<div v-for="(item,index) in btnList" :key="index" class="btnItem"
						:class="{btnItem_Active:index==btnIndex}" @click="btnClick(index)">
						{{item}}
					</div>
				</div>
				<div class="pieChart" id="jyzx_wlwzb"></div>
			</div>

		</div>
		<div class="myBody" style="width: calc(100% - 6vh - 75vw)">
			<Title>
				<span slot="title">规上企业统计</span>
			</Title>
			<div class="contentBody">
				<div class="pieChart" id="jyzx_gsqy"></div>
			</div>

		</div>
		<div class="myBody" style="width: 30vw;">
			<Title>
				<span slot="title">税收情况</span>
			</Title>
			<div class="contentBody">
				<div class="scroll-firstLine">
					<span style="width: 40%;">载体</span>
					<span style="width: 20%;">增值税</span>
					<span style="width: 20%;">企业所得税</span>
					<span style="width: 20%;">个税</span>
				</div>
				<vue-seamless-scroll style="height: 19vh;" class="seamless-warp-scroll" :data="scrollList"
					:class-option="classOption">
					<ul>
						<li v-for="(item,index) in scrollList" :key="index">
							<span style="width: 40%;">{{item.a}}</span>
							<span style="width: 20%;">{{item.b}}</span>
							<span style="width: 20%;">{{item.c}}</span>
							<span style="width: 20%;">{{item.d}}</span>
						</li>
					</ul>
				</vue-seamless-scroll>
			</div>

		</div>
	</div>

</template>

<script>
	import Title from "../../Title.vue"
	import {
		thirdLine1,
		thirdPie1
	} from "./getOption";
	export default {
		components: {
			Title,
		},
		computed: {
			classOption() {
				return {
					step: 0.2, //数值越大速度滚动越快
					limitMoveNum: 3, //开始无缝滚动的数据量  //this.fourDatata.length
					hoverStop: true, //是否开启鼠标悬停stop
					direction: 1, // 0向下 1向上 2向左 3向右
					openWatch: true, //开启数据实时监控刷新dom
					singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
					singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
					waitTime: 1000, //单步运动停止的时间(默认值1000ms)
				};
			},
		},
		data() {
			return {
				btnList: ['用电', '用水', 'PM2.5', 'SO2', 'CO', '车流量', '人流量'],
				btnIndex: 0,
				dataList: [{
					name: '1',
					value: 200
				}, {
					name: '2',
					value: 350
				}, {
					name: '3',
					value: 130
				}, {
					name: '4',
					value: 400
				}, {
					name: '5',
					value: 200
				}, {
					name: '6',
					value: 350
				}, {
					name: '7',
					value: 130
				}, {
					name: '8',
					value: 400
				},{
					name: '9',
					value: 200
				}, {
					name: '10',
					value: 350
				}, {
					name: '11',
					value: 130
				}, {
					name: '12',
					value: 400
				}],

				pieData1: [{
					name: '规上企业',
					value: 122
				}, {
					name: '规下企业',
					value: 122
				}],
				scrollList: [{
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}, {
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}, {
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}, {
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}, {
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}, {
					a: '宁波祥路汽车部件股份有限公司',
					b: "15454542",
					c: "15454542",
					d: "15454542"
				}]

			};
		},
		created() {


		},

		mounted() {
			this.getEchart1()
			this.getPie1()

		},
		methods: {
			btnClick(index) {
				this.btnIndex = index
			},
			getEchart1() {
				let chartDom = document.getElementById('jyzx_wlwzb');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = thirdLine1(this.dataList)
				myChart.setOption(option);
			},

			getPie1() {
				let chartDom = document.getElementById('jyzx_gsqy');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = thirdPie1(this.pieData1)
				myChart.setOption(option);
			},

		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.myContent {
		display: flex;
		justify-content: space-between;

	}



	.legendView {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.legendItem {
			padding: 0.6vh 0;
			box-sizing: border-box;

			>div {
				display: inline-block;
				text-align: center;


				.circle {
					display: inline-block;
					height: 0.8vh;
					width: 0.8vh;
					border-radius: 90px;
				}

				.name {
					font-size: 1.4vh;
					color: #ffffff;
				}
			}
		}
	}

	.pieChart {
		height: 22vh;
		padding: 0 1vh;
	}

	.btnGroup {
		position: absolute;
		top: 1vh;
		right: 1vh;
		display: flex;
		z-index: 10;
	}

	.btnGroup .btnItem {
		font-size: 1.2vh;
		color: rgba(255, 255, 255, 0.6);
		background-color: rgba(255, 255, 255, 0.1);
		padding: 0 1vh;
		border-radius: 4px;
		min-width: 3.8vh;
		height: 2.2vh;
		line-height: 2.2vh;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		margin-right: 0.8vh;


	}

	.btnGroup .btnItem_Active {
		color: #ffffff;
		background: rgba(32, 184, 238, 0.2);
		border: 1px solid #20B8EE;
	}
</style>
