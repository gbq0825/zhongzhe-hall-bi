<template>
	<div :class="{ body: tabIndex == 0 }">
		<map-area v-if="tabIndex!==0" />
		<div class="wrap">
			<div class="header">
				<!-- <img class="title" src="../../assets/warnning/topText.png" /> -->
				<!-- 	<div class="datetime">
					<span class="time"> {{ time }}</span>
					<span class="date"> {{ date }} {{week}}</span>
				</div> -->
				<ul class="tabView">
					<li v-for="(item, index) in tabList" :key="index" @click="onTabClick(index)"
						:class="{ tabCommon: index != tabIndex, tabActive: index == tabIndex }">
						{{ item }}
					</li>
				</ul>
				<div class="left"></div>
				<div class="right">
					<span class="time"> {{ time }}</span>
					<span class="date"> {{ date }} {{week}}</span>
				</div>
			</div>
			<!-- 	<div class="centerBox">
			</div> -->
			<transition appear name="fade" mode="out-in">
				<component :is="moduleList[tabIndex]"></component>
			</transition>
		</div>

	</div>
</template>

<script>
	import moment from "moment";
	import MapArea from "./map.vue";
	import SZYQ from "./szyq/index.vue"
	import JYZX from "./jyzx/index.vue"
	import JKZX from "./jkzx/index.vue"
	var timer;
	export default {
		name: 'Zhongzhe',
		components: {
			SZYQ,
			JYZX,
			JKZX,
			MapArea
		},
		props: ['status'],
		data() {
			return {
				NONES: ['', null, undefined],
				time: moment(Date.now()).format("HH:mm:ss"),
				date: moment(Date.now()).format("YYYY年MM月DD日"),
				week: moment(Date.now()).format("dddd"),
				tabList: ['数字园区', '经营中心'],
				tabIndex: 0,
				moduleList: ['SZYQ', 'JYZX', 'JKZX'],

			};
		},
		mounted() {

		},
		created() {
			if (this.status) {
				this.tabIndex = 1
			}
			timer = setInterval(() => {
				this.time = moment(Date.now()).format("HH:mm:ss");
				this.date = moment(Date.now()).format("YYYY年MM月DD日");
				this.week = moment(Date.now()).format("dddd");
			}, 1000);
		},

		beforeDestroy() {
			clearInterval(timer);
		},
		methods: {
			onTabClick(index) {
				this.tabIndex = index
			}
		},

	};
</script>

<style lang="less" scoped>
	
	.body {
		position: relative;
		height: 100%;
		width: 100%;
		background: url('../../assets/img/background.png') no-repeat;
		background-size: 100% 100%;
	}

	.wrap {
		position: absolute;
		left: 0;
		z-index: 20;
		right: 0;
		pointer-events: none;



		.header {
			position: relative;
			width: 100%;
			height: 10vh;
			z-index: 20;
			background: url('../../assets/img/header.png') no-repeat;
			background-size: 100% 100%;
			background-position: center;
			display: flex;
			justify-content: flex-start;
			pointer-events: auto;


			.title {
				margin-left: 21vh;
				height: 3.6vh;
				margin-top: 2vh;
			}

			.tabView {
				display: flex;
				position: absolute;
				left: 1vh;
				top: 1vh;

				li {
					height: 5vh;
					line-height: 5vh;
					width: 11vh;
					font-size: 1.5vh;
					color: #ffffff;
					padding-left: 2vh;
					box-sizing: border-box;
					text-align: center;
					cursor: pointer;
					margin-left: 2vh;
				}

				.tabCommon {
					background: url('../../assets/img/buttonBg.png') no-repeat;
					background-size: 100% 100%;
				}

				.tabActive {
					background: url('../../assets/img/buttonBg.png') no-repeat;
					background-size: 100% 100%;
				}
			}

			.left {
				height: 5vh;
				width: 14vh;
				position: absolute;
				left: 16vw;
				top: 1vh;
				background: url('../../assets/img/zhongzhe.png') no-repeat;
				background-size: 100% 100%;
			}

			.right {
				position: absolute;
				right: 1vh;
				top: 1vh;
				display: flex;
			
				.time {
					// width: 158px;
					font-size: 3vh;
					font-family: titleFont;
					color: #C0EAFF;
					letter-spacing: 1px;
				}
			
				.date {
					line-height: 2.5;
					font-size: 1.6vh;
					color: #C0EAFF;
					margin-left: 2vh;
				}
			}


			.datetime {
				position: absolute;
				left: 1%;
				top: 1.5%;

				.time {
					font-size: 3vh;
					font-style: oblique;
					color: #C0EAFF;
					line-height: 5vh;
					letter-spacing: 1px;
					font-weight: bold;
				}

				.date {
					margin-left: 2vh;
					font-size: 1.7vh;
					font-family: Helvetica;
					color: #C0EAFF;
					line-height: 1.8vh;
				}
			}

		}




		.leftBox {
			position: absolute;
			left: 2vh;
			margin-top: 2vh;
			width: 20vw;
		}

		.leftBox2 {
			position: absolute;
			left: 20vw + 2vh;
			margin-top: 2vh;
			width: 20vw;
		}

		.rightBox {
			position: absolute;
			right: 2vh;
			margin-top: 2vh;
			width: 20vw;
		}
	}
	

</style>