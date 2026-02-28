<template>
	<div class="myContent">
		<div class="myBody" style="width: 30vw;">
			<Title>
				<span slot="title">二季度运营分析</span>
			</Title>
			<div class="contentBody" style="display: flex;">
				<div class="legendView">
					<div class="legendItem" v-for="(item,index) in pieData1" :key="index">
						<div>
							<div class="name">{{item.name}}</div>
							<div class="circle" :style="'background-color:'+colorList[index]"></div>
						</div>
					</div>
				</div>
				<div class="pieChart" id="jyzx_yyfx1"></div>
				<div class="pieChart" id="jyzx_yyfx2"></div>
				<div class="legendView">
					<div class="legendItem" v-for="(item,index) in pieData2" :key="index">
						<div>
							<div class="name">{{item.name}}</div>
							<div class="circle" :style="'background-color:'+colorList[index]"></div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="myBody" style="width: 30vw;">
			<Title>
				<span slot="title">人才效益</span>
			</Title>
			<div class="contentBody">
				<div>
					<div class="pieChart" id="jyzx_rcxy1"></div>
					<img src="../../../../assets/img/yibiao1.png" class="yibiao" />
					<div class="numberView">
						<span>0</span>
						<span>20</span>
					</div>
				</div>
				<div>
					<div class="pieChart" id="jyzx_rcxy2"></div>
					<img src="../../../../assets/img/yibiao2.png" class="yibiao" />
					<div class="numberView">
						<span>0</span>
						<span>20</span>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
	import Title from "../../Title.vue"
	import {
		jyzx_yyfx1,
		jyzx_rcxy
	} from "./getOption";

	export default {
		components: {
			Title,
		},

		data() {
			return {
				pieData1: [{
					name: '企业总收入',
					value: 1020
				}, {
					name: '主营业务收入',
					value: 100
				}, {
					name: '产品销售收入',
					value: 100
				}],
				pieData2: [{
					name: '增值税',
					value: 1020
				}, {
					name: '个人所得税',
					value: 100
				}, {
					name: '企业所得税',
					value: 100
				}],
				colorList: ['#50D1FF', '#F2D34C', '#4FC9B5', '#006CD1'],
				data1: [{
					name: '千人计划',
					value:20
				}],
				data2: [{
					name: '就军人才',
					value:20
				}]
			};
		},
		created() {


		},

		mounted() {
			this.getEchart1()
			this.getEchart2()
			this.getYibiao1()
			this.getYibiao2()
		},
		methods: {
			getEchart1() {
				let chartDom = document.getElementById('jyzx_yyfx1');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = jyzx_yyfx1(this.pieData1)
				myChart.setOption(option);
			},
			getEchart2() {
				let chartDom = document.getElementById('jyzx_yyfx2');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = jyzx_yyfx1(this.pieData2)
				myChart.setOption(option);
			},
			getYibiao1() {
				let chartDom = document.getElementById('jyzx_rcxy1');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = jyzx_rcxy(this.data1,'#70DEEE')
				myChart.setOption(option);
			},
			getYibiao2() {
				let chartDom = document.getElementById('jyzx_rcxy2');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = jyzx_rcxy(this.data2,'#FFAC5C')
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

	.contentBody {
		display: flex;

		>div {
			flex: 1;
			position: relative;

			.yibiao {
				height: 13.5vh;
				width: 17.6vh;
				position: absolute;
				left: 50%;
				top: 0%;
				transform: translateX(-50%);
			}
			.numberView{
				position: absolute;
				bottom: 2vh;
				left: 8vh;
				right: 8vh;
				color: #fff;
				font-weight: 400;
				font-size: 1.8vh;
				display: flex;
				justify-content: space-between;
			}
		}
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
		height: 18vh;
		padding: 0 1vh;
	}
</style>
