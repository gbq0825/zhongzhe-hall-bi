<template>
	<div class="center">

		<div class="centerTop1">
			<div class="title1">利润总额（万元）</div>
			<div class="title2">计划利润目标（万元）</div>
			<div class="title3">销售达成率</div>
			<div class="num1">
				<count-to :startVal='0' :endVal="8888888" :duration='3000' separator="">
				</count-to>
			</div>
			<div class="unit1">万</div>
			<div class="num2">
				<count-to :startVal='0' :endVal="8888888" :duration='3000' separator="">
				</count-to>
			</div>
			<div class="unit2">万</div>
			<div class="num3">
				<count-to :startVal='0' :endVal="100.00" :duration='3000' separator="" :decimals="2">
				</count-to>
			</div>
			<div class="unit3">%</div>
		</div>
	</div>
</template>

<script>
	import CountTo from 'vue-count-to'
	export default {
		components: {
			CountTo
		},
		data() {
			return {

			};
		},
		created() {


		},

		mounted() {

		},
		methods: {},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.center {
		width: 100%;

		.centerTop1 {
			width: 100%;
			height: 10vh;
			background: url("../../../../assets/img/centerTop1.png") no-repeat;
			background-size: 100% 100%;
			position: relative;

			.title1,
			.title2,
			.title3 {
				position: absolute;
				top: 1.4vh;
				font-size: 1.4vh;
				font-weight: 500;
				color: #FFFFFF;
			}

			.title1 {
				left: 5vw;
			}

			.title2 {
				left: 23vw;
			}

			.title3 {
				left: 41vw;
			}


			.num1,
			.num2 {
				position: absolute;
				top: 4.8vh;
				width: 10vw;
				font-size: 2vh;
				font-weight: 500;
				letter-spacing: 1.2vw;
			}

			.num1 {
				left: 1.2vw;
			}

			.num2 {
				left: 19.6vw;
			}

			.num3 {
				position: absolute;
				left: 38.5vw;
				text-align: right;
				top: 4.8vh;
				width: 10vw;
				font-size: 2vh;
				font-weight: 500;
				letter-spacing: 1.16vw;
			}

			.unit1,
			.unit2,
			.unit3 {
				position: absolute;
				top: 5.2vh;
				font-size: 1.4vh;
				font-weight: 500;
				color: #FFFFFF;
			}

			.unit1 {
				left: 13.5vw;
			}

			.unit2 {
				left: 32vw;
			}

			.unit3 {
				left: 49vw;
			}
		}
	}
</style>