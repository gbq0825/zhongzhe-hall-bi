<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<router-view v-if="isRouterAlive"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isRouterAlive: true,
			};
		},
		methods: {
			// setFont(){

			// }
		}
	};
</script>

<style>
	/* router-fade */
	.router-fade-enter-active,
	.router-fade-leave-active {
		transition: opacity 0;
	}

	.router-fade-enter,
	.router-fade-leave-active {
		opacity: 0;
	}

	body {
		/* background-color: #090d29; */
		background-color: #000;
		color:#ffffff;
		overflow: hidden;
	}

	body,
	html {
		width: 100%;
		height: 100%;
	}



	ul,
	ol,
	li {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	#app {
		height: 100%;
		width: 100%;
		
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
