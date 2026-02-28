<template>
	<div class="contentBody">
		<!-- <div class="topTitleView">
			<img src="../../../assets/img/bigTitle1.png" class="bigTitle" />
			<img src="../../../assets/img/smallTitle1.png" class="smallTitle" />
		</div> -->
		<div class="leftBox">
			<LeftBox1></LeftBox1>
		</div>
		<div class="leftBox2">
			<LeftBox2></LeftBox2>
		</div>
		<div class="rightBox">
			<RightBox></RightBox>
		</div>
		<div class="centerBox">
			<CenterBox></CenterBox>
		</div>
	</div>
</template>

<script>
	import LeftBox1 from "./modules/leftbox.vue"
	import LeftBox2 from "./modules/leftbox2.vue"
	import RightBox from "./modules/rightbox.vue"
	import CenterBox from "./modules/centerbox.vue"
	export default {
		components: {
			LeftBox1,
			LeftBox2,
			RightBox,
			CenterBox
		},
		data() {
			return {
				NONES: ['', null, undefined],
			};
		},
		methods: {},

	};
</script>

<style lang="less" scoped>
	.contentBody {
		position: relative;
		pointer-events: auto;


		.topTitleView {
			position: fixed;
			top: 2vh;
			left: 3vw;

			.bigTitle {
				height: 5vh;
			}

			.smallTitle {
				height: 3.2vh;
			}
		}


		.leftBox {
			position: absolute;
			left: 2vh;
			width: 20vw;
		}

		.leftBox2 {
			position: absolute;
			left: 20vw + 2vh;
			width: 20vw;
		}

		.rightBox {
			position: absolute;
			right: 2vh;
			width: 20vw;
		}

		.centerBox {
			position: absolute;
			left: 40vw + 3vh;
			right: 20vw + 2vh;
			top: 56vh;
		}
	}
</style>