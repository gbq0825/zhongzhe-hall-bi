<template>
	<div>
		<MapView></MapView>
		<div class="contentBody">
			<div class="topTitleView">
				<img src="../../../assets/img/bigTitle3.png" class="bigTitle" />
				<img src="../../../assets/img/smallTitle3.png" class="smallTitle" />
			</div>
			<div class="boxview">
				<BoxView></BoxView>
			</div>

		</div>
	</div>

</template>

<script>
	import BoxView from "./modules/boxView.vue"
	import MapView from "./modules/map.vue"
	export default {
		components: {
			BoxView,
			MapView
		},
		data() {
			return {
				NONES: ['', null, undefined],
				
			};
		},
		mounted() {
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
	.contentBody {
		position: relative;
		// height: 100%;
		// width: 100%;
		z-index: 16;
		pointer-events: none;

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

		.boxview {
			margin: 2vh 2vh 0 2vh;
		}

		.leftBox {
			position: absolute;
			z-index: 19;
			left: 2vh;
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
