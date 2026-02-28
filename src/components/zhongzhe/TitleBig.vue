<template>
	<div class="titleView">
		<span class="icon">
			<slot name='icon'></slot>
		</span>
		<span class="titleBig">
			<slot name="title"></slot>
		</span>
	</div>
</template>

<script>
</script>

<style lang="less" scope>
	.titleView {
		background: url('../../assets/img/headerBig.png') no-repeat;
		background-size: auto 100%;
		background-position: -3vh -2vh;
		height: 10vh;
		margin-bottom: -2vh;
		display: flex;
		align-items: center;

		.icon {
			>img {
				vertical-align: middle;
				height: 2.4vh;
				width: 2.4vh;
				margin: 0 1vh;
			}
		}

		.titleBig {
			margin-left: 8vh;
			font-size: 1.8vh;
			color: #ffffff;
			margin-top: -3.4vh;
			// text-overflow: ellipsis;
			// white-space: nowrap;
			// overflow: hidden;
		}
	}
</style>