<template>
	<div class="myContent">
		<div class="myBody">
			<Title>
				<span slot="title">公司简介</span>
			</Title>
			<div class="content">
				<img src="../../../../assets/img/mediaImg.png" class="bigTitle" />
				<div class="text">
					中哲集团始创于1998年，现有员工5000余人。实业与产业投资并进，横跨服饰品牌、大宗商品、消费电子、新材料与新能源、大健康、未来社区运营、产业投资等领域
				</div>
			</div>
			<Title>
				<span slot="title">荣誉</span>
			</Title>
			<div class="contentBody">
				<div class="titleHonor">
					<div style="width: 20%;">时间</div>
					<div class="honor" style="width: 80%;">荣誉</div>
				</div>
				<vue-seamless-scroll style="height: 38vh;" class="seamless-warp-scroll1" :data="dataList"
					:class-option="classOption">
					<ul>
						<li v-for="(item, index) in dataList" :key="index">
							<span style="width: 20%;">{{ item.time }}</span>
							<span class="honor" style="width: 80%;">{{ item.content }}</span>
						</li>
					</ul>
				</vue-seamless-scroll>
			</div>
			<Title>
				<span slot="title">企业文化</span>
			</Title>
			<img src="../../../../assets/img/qywh.png" class="qywh" />
		</div>
	</div>
</template>

<script>
	import Title from "../../Title.vue"

	export default {
		components: {
			Title,
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
				dataList: [{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
					{
						time: '2020年',
						content: '宁波市“纳税50强”企业'
					},
				],
			};
		},
		created() {


		},

		mounted() {},
		methods: {

		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.myContent {
		width: 22vw;
		margin-left: 1vw;
		pointer-events: auto;
	}

	.myBody {


		.content {
			display: flex;
			padding: 2vh 1vh;
			height: 16vh;


			.bigTitle {
				width: 10vw;
				float: left;
				margin-right: 1vh;
			}

			.text {
				overflow: hidden;
				height: 100%;
				overflow-y: scroll;
				font-size: 1.6vh;
			}
		}


		.contentBody {
			height: 26vh;
			overflow: hidden;
			margin-bottom: 2vh;

			.titleHonor {
				background: #023164;
				opacity: 0.4;
				display: flex;
				width: 100%;
				padding: 0.8vh 0;

				div {
					font-size: 1.6vh;
					font-weight: 600;
					color: #FFFFFF;
					text-align: center;
				}
			}
		}

		.seamless-warp-scroll1 {
			overflow: hidden;
		}

		.seamless-warp-scroll1 ul li {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1vh 0;
			background: linear-gradient(90deg, rgba(7, 10, 22, 0) 0%, rgba(13, 57, 98, 0.3) 46%, rgba(13, 57, 98, 0) 100%);
		}

		.seamless-warp-scroll1 ul li span {
			display: flex;
			justify-content: center;
			color: #ffffff;
			font-size: 1.6vh;
		}

		.honor::after {
			position: absolute;
			height: 1px;
			width: 80%;
			content: "";
			bottom: 0;
			left: 20%;
			background: linear-gradient(135deg,
					rgba(238, 238, 238, 0) 0%,
					#45a5c9 53%,
					rgba(255, 255, 255, 0) 100%);
		}

		.qywh {
			width: 100%;
			height: 16vh;
			object-fit: contain;
			margin-top: 20px;
		}
	}
</style>