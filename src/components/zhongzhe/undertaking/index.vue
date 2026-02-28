<template>
	<div>

		<map-area :mapName="mapName" :mapTitle="mapTitle"/>

		<div class="wrap">
			<div class="header">
				<div class="topTitle">{{mapTitle}}综合数据管理平台</div>
				<ul class="tabView">
					<li @click="onTabClick()" class="tabCommon">返回首页</li>
				</ul>
				<div class="left"></div>
				<div class="right">
					<div class="time">{{time}}</div>
					<span class="date"> {{ date }} {{week}}</span>
				</div>
			</div>
			<div class="contentBody">
				<div class="flexJy1">
					<div class="left">
						<LeftBox></LeftBox>
					</div>
					<div class="cenerBox">
						<CenterBox></CenterBox>
					</div>
					<div class="right">
						<RightBox></RightBox>
					</div>
				</div>
				<div>
					<BottomBox></BottomBox>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	import LeftBox from "./modules/leftbox.vue"
	import RightBox from "./modules/Rightbox.vue"
	import CenterBox from "./modules/centerbox.vue"
	import BottomBox from "./modules/bottombox.vue"
	import MapArea from "./modules/map.vue";
	import moment from "moment";
	var timer;
	export default {
		components: {
			LeftBox,
			RightBox,
			CenterBox,
			BottomBox,
			MapArea
		},
		props: ['mapName', 'mapTitle'],
		data() {
			return {
				NONES: ['', null, undefined],
				time: moment(Date.now()).format("HH:mm:ss"),
				date: moment(Date.now()).format("YYYY年MM月DD日"),
				week: moment(Date.now()).format("dddd"),
			};
		},
		created() {
			console.log(this.mapName, this.mapTitle)
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
			onTabClick() {
				this.$router.push({
					name: "Zhongzhe",
					params: {
						status: 1
					},
				})
			}
		},

	};
</script>


<style lang="less" scoped>

	.wrap {
		position: absolute;
		left: 0;
		z-index: 20;
		right: 0;
		top:0;
		height: 100vh;
		pointer-events: none;



		.header {
			position: relative;
			width: 100%;
			height: 10vh;
			z-index: 20;
			background: url('../../../assets/img/undertaking1.png') no-repeat;
			background-size: 100% 100%;
			background-position: center;
			display: flex;
			justify-content: flex-start;
			pointer-events: auto;
			.topTitle{
				position: absolute;
				top: 1.2vh;
				font-family: titleFont;
				font-size: 3.8vh;
				background: linear-gradient(0, #ffffff 0%, #589EF2 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				left: 50%;
				transform: translateX(-50%);

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
					background: url('../../../assets/img/buttonBg.png') no-repeat;
					background-size: 100% 100%;
				}

				.tabActive {
					background: url('../../../assets/img/buttonBg.png') no-repeat;
					background-size: 100% 100%;
				}
			}

			.left {
				height: 5vh;
				width: 14vh;
				position: absolute;
				left: 10vw;
				top: 1vh;
				background: url('../../../assets/img/zhongzhe.png') no-repeat;
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
		}

		.contentBody {
			position: relative;

			.flexJy1 {
				display: flex;
				justify-content: space-between;
			}
			.cenerBox{
				margin: 0 1vw;
				width: 100%;
			}

		}
	}
</style>