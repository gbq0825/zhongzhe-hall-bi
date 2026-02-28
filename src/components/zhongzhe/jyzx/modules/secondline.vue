<template>
	<div class="myContent">
		<div class="myBody" style="width: 30vw;">
			<Title>
				<span slot="title">税收完成趋势</span>
			</Title>
			<div class="contentBody">
				<div class="pieChart" id='jyzx_sswcqs'></div>
			</div>

		</div>
		<div class="myBody" style="width: calc(100% - 6vh - 60vw)">
			<Title>
				<span slot="title">房产租赁情况统计</span>
			</Title>
			<div class="contentBody">
				<div class="pieChart" id='jyzx_fczl'></div>
			</div>

		</div>
		<div class="myBody" style="width: 30vw;">
			<Title>
				<span slot="title">招商项目状态</span>
			</Title>
			<div class="contentBody" style="display: flex;">
				<div style="flex: 1;">
					<div class="pieChart" id='jyzx_zsxm1'></div>
				</div>
				<div style="flex: 1;">
					<div class="pieChart" id='jyzx_zsxm2'></div>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
	import Title from "../../Title.vue"
	import {
		secondLine1,
		secondLine2,
		secondPie1,
		secondPie2
	} from "./getOption";


	export default {
		components: {
			Title,
		},

		data() {
			return {
				dataList: [{
					name: '一季度',
					value: 200
				}, {
					name: '二季度',
					value: 350
				}, {
					name: '三季度',
					value: 130
				}, {
					name: '四季度',
					value: 400
				}],
				dataList2:[{
					name: '2月',
					number1: 100,
					number2: 80,
					number3: 50,
					number4: 40,
				}, {
					name: '4月',
					number1: 100,
					number2: 80,
					number3: 20,
					number4: 50,
				}, {
					name: '6月',
					number1: 100,
					number2: 80,
					number3: 80,
					number4: 60,
				}, {
					name: '8月',
					number1: 100,
					number2: 80,
					number3: 40,
					number4: 90,
				}, {
					name: '10月',
					number1: 100,
					number2: 80,
					number3: 60,
					number4: 70,
				}, {
					name: '12月',
					number1: 170,
					number2: 60,
					number3: 70,
					number4: 100,
				}],
				pieData1:[{
					name:'跟踪项目',
					value:122
				}],
				pieData2:[{
					name:'重点项目',
					value:3171
				}]
			};
		},
		created() {


		},

		mounted() {
			this.getEchart1()
			this.getEchart2()
			this.getPie1()
			this.getPie2()
			// this.getYibiao1()
			// this.getYibiao2()
		},
		methods: {
			getEchart1() {
				let chartDom = document.getElementById('jyzx_sswcqs');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = secondLine1(this.dataList)
				myChart.setOption(option);
			},
			getEchart2() {
				let chartDom = document.getElementById('jyzx_fczl');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = secondLine2(this.dataList2)
				myChart.setOption(option);
			},
			getPie1() {
				let chartDom = document.getElementById('jyzx_zsxm1');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = secondPie1(this.pieData1)
				myChart.setOption(option);
			},
			getPie2() {
				let chartDom = document.getElementById('jyzx_zsxm2');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = secondPie2(this.pieData2)
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
		height: 20vh;
		padding: 0 1vh;
	}
</style>
