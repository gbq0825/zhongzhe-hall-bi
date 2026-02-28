<template>
	<div class="myBody">
		<TitleBig>
			<span slot="title">园区营收统计</span>
		</TitleBig>
		<div class="contentBody">
			<div class="pieChart" id="yqysLine"></div>
		</div>

	</div>
</template>

<script>
import TitleBig from "../../TitleBig.vue"
import {
	yqysLine
} from './getOption';
export default {
	components: {
		TitleBig,
	},

	data() {
		return {
			lineData: [{
				name: '1月',
				value: 5
			}, {
				name: '2月',
				value: 12
			}, {
				name: '3月',
				value: 10
			}, {
				name: '4月',
				value: 30
			}, {
				name: '5月',
				value: 5
			}, {
				name: '6月',
				value: 10
			}, {
				name: '7月',
				value: 20
			}, {
				name: '8月',
				value: 20
			}, {
				name: '9月',
				value: 15
			}, {
				name: '10月',
				value: 14
			}, {
				name: '11月',
				value: 6
			}, {
				name: '12月',
				value: 20
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
			let chartDom = document.getElementById('yqysLine');
			this.$echarts.init(chartDom).dispose()
			let myChart = this.$echarts.init(chartDom, 'dark');
			let option = yqysLine(this.lineData)
			myChart.setOption(option);
		},
	},


}
</script>

<style lang="less" scoped>
@import "../../styles.less";

.pieChart {
	height: 21vh;
}
</style>
