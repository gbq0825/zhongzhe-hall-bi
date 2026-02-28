<template>
	<div class="myBody">
		<Title>
			<span slot="title">园区动态</span>
		</Title>
		<div class="contentBody">
			<vue-seamless-scroll style="height: 21vh;" class="seamless-warp" :data="dataList"
				:class-option="classOption">
				<ul>
					<li v-for="(item,index) in dataList" :key="index">
						<img src="../../../../assets/img/mediaImg.png" />
						<div class="warp-view">
							<div>6月13日动态</div>
							<div>宁波模具产业园区组
								织召开安全生产月工
								作会议。
							</div>
						</div>
					</li>
				</ul>
			</vue-seamless-scroll>
		</div>

		<Title>
			<span slot="title">用电统计</span>
		</Title>
		<div class="contentBody">
			<div class="pieChart" id="ydtjLine"></div>

		</div>
		<Title>
			<span slot="title">用水统计</span>
		</Title>
		<div class="contentBody">
			<div class="pieChart" id="ystjLine"></div>
		</div>
	</div>
</template>

<script>
	// import CountTo from 'vue-count-to'
	import Title from "../../Title.vue"
	import {
		ydtjLine,
		ystjLine
	} from './getOption';
	export default {
		components: {
			Title,
			// CountTo
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
				dataList: [
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
				],
				lineData: [{
					name: '2月',
					number1: 100,
					number2: 80,
					number3: 50
				}, {
					name: '4月',
					number1: 50,
					number2: 80,
					number3: 20
				}, {
					name: '6月',
					number1: 90,
					number2: 50,
					number3: 60
				}, {
					name: '8月',
					number1: 100,
					number2: 80,
					number3: 40
				}, {
					name: '10月',
					number1: 120,
					number2: 80,
					number3: 60
				}, {
					name: '12月',
					number1: 70,
					number2: 60,
					number3: 50
				}],
				lineData2: [{
					name: '2016',
					number1: 100,
					number2: 80,
				}, {
					name: '2017',
					number1: 10,
					number2: 50,
				}, {
					name: '2018',
					number1: 70,
					number2: 30,
				}, {
					name: '2019',
					number1: 67,
					number2: 54,
				}, {
					name: '2020',
					number1: 66,
					number2: 76,
				}, {
					name: '2021',
					number1: 22,
					number2: 80,
				}]
			};
		},
		created() {


		},

		mounted() {
			this.getEchart()
			this.getEchart2()
		},
		methods: {
			getEchart() {
				let chartDom = document.getElementById('ydtjLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = ydtjLine(this.lineData)
				myChart.setOption(option);
			},
			getEchart2() {
				let chartDom = document.getElementById('ystjLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = ystjLine(this.lineData2)
				myChart.setOption(option);
			},
		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.pieChart {
		height: 20vh;
	}

	.seamless-warp {
		overflow: hidden;
	}

	.seamless-warp ul li {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px 0;

		>img {
			height: 10vh;
			width: 15vh;
			object-fit: contain;
			margin-right: 1vh;
		}

		.warp-view {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			>div {
				color: #fff;
				font-size: 1.6vh;
			}
		}
	}
</style>
