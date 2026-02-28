<template>
	<div class="myContent">
		<div class="myBody">
			<Title>
				<span slot="title">消费电子事业部销售收入（万元）</span>
			</Title>
			<div class="morBody">
				<div class="morChart" id="salscLine"></div>
			</div>
			<Title>
				<span slot="title">月度销售收入趋势（万元）</span>
			</Title>
			<div class="monthBody">
				<div class="monthChart" id="monthLine"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../Title.vue"
	import {
		salscLine,
		monthLine
	} from './getOption';
	export default {
		components: {
			Title,
		},
		data() {
			return {
				options1: ["2022年", "2021年", "2020年"],
				integral: 0,
				lineData: [{
					name: '02',
					value: 1
				}, {
					name: '03',
					value: 2
				}, {
					name: '04',
					value: 3
				}, {
					name: '05',
					value: 2
				}, {
					name: '06',
					value: 6
				}, {
					name: '07',
					value: 3
				}, {
					name: '08',
					value: 5
				}],
			};
		},
		created() {


		},

		mounted() {
			this.getEchart()
			this.getEchart1()
		},
		methods: {
			getEchart() {
				let chartDom = document.getElementById('salscLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = salscLine(this.lineData)
				myChart.setOption(option);
			},
			getEchart1() {
				let chartDom = document.getElementById('monthLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = monthLine(this.lineData)
				myChart.setOption(option);
			},
			clickInt(value) {
				this.integral = value;
			},
		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.myContent {
		width: 22vw;
		margin-right: 1vw;
		pointer-events: auto;
	}


	.morChart {
		height: 23vh;
		z-index: 9;
	}

	.monthChart {
		height: 22vh;
		z-index: 9;
	}

	.optionDiv {
		position: relative;
	}
</style>