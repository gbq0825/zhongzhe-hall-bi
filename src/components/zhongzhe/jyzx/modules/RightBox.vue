<template>
	<div class="myContent">
		<div class="myBody">
			<Title>
				<span slot="title">事业部</span>
			</Title>
			<div class="businessTitle">大健康事业部</div>
			<div class="business">
				<div>中哲儿童女王</div>
				<div>中哲医疗科技</div>
				<div>安理中哲健康</div>
			</div>
			<div class="businessTitle">品牌事业部</div>
			<div class="business1">TKY</div>
			<Title>
				<span slot="title">旗下品牌</span>
			</Title>
			<div class="brand">
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
				<div class="brandBox">GXG</div>
			</div>
			<div class="optionDiv">
				<Title>
					<span slot="title">月度产值营收</span>
				</Title>
				<div class="option">
					<div class="optionText">{{ options1[integral] }}</div>
					<img class="optionImg" src="../../../../assets/img/down.png" alt="" />
					<ul class="optionUl">
						<li @click="clickInt(index)" v-for="(item, index) in options1" :key="index">
							{{ item }}
						</li>
					</ul>
				</div>
			</div>

			<div class="morBody">
				<div class="morChart" id="morLine"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../Title.vue"
	import {
		morLine
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
		},
		methods: {
			getEchart() {
				let chartDom = document.getElementById('morLine');
				this.$echarts.init(chartDom).dispose()
				let myChart = this.$echarts.init(chartDom, 'dark');
				let option = morLine(this.lineData)
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

	.myBody {

		.businessTitle {
			font-size: 1.6vh;
			font-weight: 600;
			color: #50D1FF;
			margin: 1vh;
		}

		.business {
			margin: 0 2vh;
			box-sizing: border-box;
			background: url('../../../../assets/img/Business.png') no-repeat;
			background-size: 100% 100%;

			div {
				width: 100%;
				text-align: center;
				font-size: 1.4vh;
				padding: 1vh 0;
				font-weight: 600;
			}
		}

		.business1 {
			margin: 0 2vh 2vh;
			background: url('../../../../assets/img/Business1.png') no-repeat;
			background-size: 100% 100%;
			text-align: center;
			font-size: 1.4vh;
			padding: 1vh 0;
			font-weight: 600;
		}

		.brand {
			padding:0 2vh;
			display: flex;
			flex-wrap: wrap;

			.brandBox {
				background: url('../../../../assets/img/bpbg.png') no-repeat;
				background-size: 100% 100%;
				width: 30%;
				margin-right: 3%;
				height: 4vh;
				font-size: 1.8vh;
				line-height: 4vh;
				margin-bottom: 1vh;
				text-align: center;
			}
		}

		.morChart {
			height: 28vh;
			z-index: 9;
		}

		.optionDiv {
			position: relative;
		}

		.option {
			position: absolute;
			right: 0px;
			top: 2vh;
			width: 9vh;
			height: 3vh;
			background: url("../../../../assets/img/option.png") no-repeat;
			background-size: 100% 100%;
			line-height: 3vh;

			.optionText {
				position: absolute;
				left: 1vh;
				font-size: 1.4vh;
			}

			.optionImg {
				position: absolute;
				right: 0.6vh;
				top: 0px;
				width: 3vh;
			}



			.optionUl {
				position: absolute;
				right: 0px;
				top: 3vh;
				width: 10vh;
				text-align: center;
				background-color: rgba(33, 50, 76, 0.7);
				z-index: 999;
				display: none;

				li {
					position: relative;
					width: 100%;
					text-align: center;
					font-size: 1.5vh;
					font-weight: 600;
					color: #ffffff;
					padding: 1vh 0;

					&::after {
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						height: 1px;
						width: 100%;
						background: linear-gradient(to right,
								rgba(255, 255, 255, 0),
								rgba(200, 255, 255, 1),
								rgba(255, 255, 255, 0));
					}

					&:last-child::after {
						display: none;
					}

					&:hover {
						color: #ffc567;
						cursor: pointer;
						display: block;
						// color: #5AD8A6;
					}
				}

				&:hover {
					cursor: pointer;
					display: block;
				}
			}

			&:hover {
				cursor: pointer;

				.optionUl {
					display: block;
				}
			}
		}
	}
</style>