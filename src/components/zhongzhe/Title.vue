<template>
	<div class="titleView1">
		<span class="icon">
			<slot name='icon'></slot>
		</span>
		<span class="title">
			<slot name="title"></slot>
		</span>
	</div>
</template>

<script>
</script>

<style lang="less" scope>
.titleView1 {
	background: url('../../assets/img/titlebg.png') no-repeat;
	background-size:  auto 100%;
	background-position: -3vh -2vh;
	height: 9vh;
	margin-bottom: -3vh;
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

	.title {
		margin-left: 4vh;
		font-size: 1.8vh;
		color: #ffffff;
		margin-top: -3.8vh;
	}
}
</style>
