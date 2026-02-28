<template>
	<div class="myBody">
		<Title>
			<span slot="title">园区概述</span>
		</Title>
		<div class="contentBody">
			<ul class="itemView">
				<li v-for="(item,index) in dataList" :key="index">
					<div class="title">{{item.name}}</div>
					<div class="bigNum">
						<count-to :startVal='0' :endVal="item.value" :decimals='index==4?1:0' :duration='3000'>
						</count-to>
						<span class="unit">{{item.unit}}</span>
					</div>
				</li>
			</ul>
		</div>

		<Title>
			<span slot="title">企业招商入驻情况</span>
		</Title>
		<div class="contentBody">
			<div class="pieChart" id="zsrzLine"></div>

		</div>
		<Title>
			<span slot="title">企业统计</span>
		</Title>
		<div class="contentBody">
			<div class="pieChart" id="qytjPie"></div>
			<div class="legendView">
				<div class="legendItem" v-for="(item,index) in pieData" :key="index">
					<div>
						<div class="value">{{item.value}}</div>
						<div class="name">{{item.name}}</div>
						<div class="circle" :style="'background-color:'+colorList[index]"></div>
					</div>
				</div>
			</div>
			<div class="jindu_box" v-for="(item,index) in pieData" :key="index">
				<div class="jindu_title">{{item.name}}:</div>
				<div class="jindu">
					<div class="jindu_active" :style="'width:'+(item.value/totalData*100)+'%'"></div>
					<div class="jindu_circle" :style="'left:'+(item.value/totalData*100)+'%'"></div>
				</div>
				<div class="jindu_content">{{item.value}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CountTo from 'vue-count-to'
	import Title from "../../Title.vue"
	import {
		qytjPie,
		zsrzLine
	} from './getOption';
	export default {
		components: {
			Title,
			CountTo
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
				dataList: [{
						name: '占地面积',
						value: 50,
						unit: '万㎡'
					},
					{
						name: '规划建筑面积',
						value: 990,
						unit: '万㎡'
					},
					{
						name: '建筑面积',
						value: 990,
						unit: '万㎡'
					},
					{
						name: '计容面积',
						value: 890,
						unit: '万㎡'
					},
					{
						name: '容积率',
						value: 1.2,
						unit: ''
					},
					{
						name: '绿化率',
						value: 90,
						unit: '%'
					}
				],
				lineData: [{
					name: '2015',
					value: 1
				}, {
					name: '2016',
					value: 2
				}, {
					name: '2017',
					value: 3
				}, {
					name: '2018',
					value: 2
				}, {
					name: '2019',
					value: 6
				}, {
					name: '2020',
					value: 3
				}, {
					name: '2021',
					value: 5
				}],
				pieData: [{
					name: '模具制造',
					value: 100
				}, {
					name: '商业',
					value: 1020
				}, {
					name: '服务类',
					value: 100
				}, {
					name: '其他',
					value: 100
				}],
				colorList: ['#006CD1', '#70B7FA', '#F2D34C', '#4FC9B5'],
				totalData: 0
			};
		},
		created() {


		},

		mounted() {
			this.totalData = this.pieData.reduce((prev, next) => {
				return prev = prev + next.value
			}, 0)
			this.getEchart()
			this.getEchart2()
		},
		methods: {
			getEchart() {
				let chartDom = document.getElementById('zsrzLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = zsrzLine(this.lineData)
				myChart.setOption(option);
			},
			getEchart2() {
				let chartDom = document.getElementById('qytjPie');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = qytjPie(this.pieData)
				myChart.setOption(option);
				// myChart.dispatchAction({
				// 	type: "highlight",
				// 	seriesIndex: 3,
				// 	dataIndex: 1
				// })
			},

		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";


	.itemView {
		display: flex;
		flex-wrap: wrap;

		>li {
			width: 33.3%;
			height: 7.4vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.bigNum {
				font-size: 2.4vh;
				color: #5FD5FF;
				font-weight: bold;

				.unit {
					font-size: 1.6vh;
				}
			}

			.title {
				font-size: 1.6vh;
				color: #fff;
			}
		}


	}

	.pieChart {
		height: 17vh;
		z-index: 9;
	}

	.legendView {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 8;
		display: flex;
		flex-wrap: wrap;

		.legendItem {
			width: 50%;
			padding: 1vh 2vh;
			box-sizing: border-box;

			>div {
				display: inline-block;
				text-align: center;

				.value {
					font-size: 2vh;
					color: #fff;
				}

				.circle {
					display: inline-block;
					height: 0.8vh;
					width: 0.8vh;
					border-radius: 90px;
				}

				.name {
					font-size: 1.2vh;
					color: rgba(255, 255, 255, 0.70);
				}
			}



			&:nth-child(2n) {
				text-align: right;
			}
		}
	}

	.jindu_box {
		margin-top: 1.2vh;
		display: flex;
		align-items: center;

		.jindu_title {
			font-size: 1.4vh;
			color: #50D1FF;
			width: 8vh;
			text-align: right;
			padding-right: 1vh;
			box-sizing: border-box;
		}

		.jindu {
			flex: 1;
			height: 1vh;
			border-radius: 1vh;
			background-color: #3c629f;
			position: relative;

			.jindu_active {
				position: absolute;
				left: 0;
				top: 0;
				height: 1vh;
				border-radius: 1vh;
				background: linear-gradient(270deg, #6DFFC5 0%, rgba(89, 185, 255, 0) 100%);
			}

			.jindu_circle {
				position: absolute;
				top: -0.1vh;
				width: 1.2vh;
				height: 1.2vh;
				background: #81FFCD;
				border-radius: 90px;
				transform: translateX(-50%);
				display: flex;
				align-items: center;
				box-shadow: 0 0 4px 4px rgba(109, 255, 197, 0.4);
			}
		}

		.jindu_content {
			font-size: 1.4vh;
			color: #ffffff;
			width: 6vh;
			text-align: left;
			padding-left: 1vh;
			box-sizing: border-box;
		}
	}
</style>
