<template>
	<div class="contentBody">
		<div class="flexJy">
			<div class="leftBox">
				<LeftBox></LeftBox>
			</div>
			<div class="cenerBox">
				<CenterBox></CenterBox>
			</div>
			<div class="rightBox">
				<RightBox></RightBox>
			</div>
		</div>
		<!-- <div class="button" @click="onTabClick()"></div> -->
	</div>
</template>
<script>
	import LeftBox from "./modules/leftBox.vue"
	import RightBox from "./modules/RightBox.vue"
	import CenterBox from "./modules/centerBox.vue"
	export default {
		components: {
			LeftBox,
			RightBox,
			CenterBox
		},
		data() {
			return {
				NONES: ['', null, undefined],
			};
		},
		methods: {
			onTabClick() {
				this.$router.push('/undertaking')
			},
		},

	};
</script>

<style lang="less" scoped>
	.contentBody {
		// background: url('../../../assets/img/backgroundBg.png') no-repeat;
		// background-size: 100% 100%;
		position: relative;
		height: 100%;
		width: 100%;


		.flexJy {
			display: flex;
			justify-content: space-between;
		}

		.button {
			position: absolute;
			width: 200px;
			height: 200px;
			left: 50vw;
			top: 75vh;
			cursor: pointer;
			// background-color: black;
		}
		
		.cenerBox{
			margin: 0 1vw;
			width: 100%;
		}

	}
</style>