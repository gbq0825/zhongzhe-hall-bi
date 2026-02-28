<template>
	<div class="myBody">
		<Title>
			<span slot="title">今日访客数</span>
		</Title>
		<div class="contentBody">
			<img src="../../../../assets/img/fangke.png" class="fangke" />
			<div class="fangkeView">
				<div class="bigNum">
					<count-to :startVal='0' :endVal="69" :duration='3000'></count-to>
				</div>
				<div class="title">今日访客数（人）</div>
			</div>
		</div>

		<Title>
			<span slot="title">规上企业占比</span>
		</Title>
		<div class="contentBody">
			<div class="pieChart" id="gsPie"></div>

		</div>
		<Title>
			<span slot="title">高新技术企业</span>
		</Title>
		<div class="contentBody">
			<vue-seamless-scroll style="height: 35vh;" class="seamless-warp-scroll" :data="dataList"
				:class-option="classOption">
				<ul>
					<li v-for="(item,index) in dataList" :key="index">
						<span>{{item}}</span>
					</li>
				</ul>
			</vue-seamless-scroll>
		</div>
	</div>
</template>

<script>
	import CountTo from 'vue-count-to'
	import Title from "../../Title.vue"
	import {
		gsPie
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
				dataList: [
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
					'宁波祥路汽车部件股份有限公司',
				],
				pieData: [{
					name: '规上企业',
					value: 100
				}, {
					name: '规下企业',
					value: 122
				}]
			};
		},
		created() {


		},

		mounted() {
			this.getEchart()
		},
		methods: {
			getEchart() {
				let chartDom = document.getElementById('gsPie');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = gsPie(this.pieData)
				myChart.setOption(option);
			},
		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

		.fangke {
			height: 10vh;
		}

		.fangkeView {
			position: absolute;
			right: 5vh;
			top: 2vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.bigNum {
				font-size: 3.6vh;
				color: #fff;
				font-weight: bold;
			}

			.title {
				font-size: 1.6vh;
				color: #97C3F4;
			}
		}

		.pieChart {
			height: 16vh;
		}

		.seamless-warp-scroll {
			overflow: hidden;
		}

		.seamless-warp-scroll ul li {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 12px 0;
			background: linear-gradient(90deg, rgba(7, 10, 22, 0) 0%, rgba(13, 57, 98, 0.3) 46%, rgba(13, 57, 98, 0) 100%);
		}

		.seamless-warp-scroll ul li span {
			display: flex;
			justify-content: center;
			color: #ffffff;
			font-size: 1.6vh;
		}

		.seamless-warp-scroll ul li::after {
			position: absolute;
			height: 1px;
			width: 80%;
			content: "";
			bottom: 0;
			left: 10%;
			background: linear-gradient(135deg,
					rgba(238, 238, 238, 0) 0%,
					#45a5c9 53%,
					rgba(255, 255, 255, 0) 100%);
		}
	
</style>
