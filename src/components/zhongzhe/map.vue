<template>
	<div class="mapView">
		<div id="chinaMap" style="width: 100%;height: 100%;"></div>


	</div>
</template>
<script>
	import chinaJson from '../../assets/data/china.json'
	import 'echarts-gl'
	// import mapbg from '../../assets/img/mapback.jpg'
	var highLightTime
	export default {

		data() {
			return {
				NONES: ['', null, undefined],

				mapCharts: null,
				areaList: [{
					name: '四川省',
					title: '新材料事业部',
					center: [104.065735, 30.659462]
				}, {
					name: '河南省',
					title: '服装事业部',
					center: [113.665412, 34.757975]
				}, {
					name: '江苏省',
					title: '服装事业部',
					center: [118.767413, 32.041544]
				}, {
					name: '浙江省',
					title: '中哲控股集团有限公司',
					center: [120.153576, 30.287459],
				}, {
					name: '广东省',
					title: '消费电子事业部',
					center: [113.280637, 23.125178]
				}],
				myChart: null,
				highIndex: 0,
				regionsList: []




			}
		},
		//调用
		mounted() {
			this.changeAreaData()
		},
		beforeDestroy() {
			clearInterval(highLightTime)
		},
		methods: {
			//需要高亮显示的区域
			changeAreaData() {
				this.regionsList = this.areaList?.map((item) => {
					return {
						name: item.name,
						tooltip: {
							show: true,
							padding: [0, 0],
							// borderWidth: 1,
							borderColor:'rgba(136, 232, 250, 1)',
							backgroundColor: 'rgba(0, 17, 50, 0.6)',
							formatter: () => {
								let html = `<div class="tooltip-box-style">
											<div class="tool-box-title1">${item.name}</div>
											<div  class="tool-box-title2">${item.title}</div>
										</div>`
								return html
							},
							textStyle: {
								color: '#ffffff',
							}
						},
						label: {
							normal: {
								show: true,
								formatter: item.title,
								textStyle: {
									color: "#ffffff",
								},
							},
							emphasis: {
								show: true,
								textStyle: {
									color: "#ffffff",
								},
							},
						},
						itemStyle: {
							normal: {
								areaColor: '#FE7549',
								borderColor: 'rgba(136, 232, 250, 1)',
							},
							emphasis: {
								areaColor: '#FE7549',
								borderColor: 'rgba(136, 232, 250, 1)',
							},
						},
					}
				})
				this.drawChinaMap()
			},
			drawChinaMap() {
				let domImg = document.createElement("img");
				domImg.src = require('../../assets/img/mapback.jpg')
				setTimeout(() => {

					let chartDom = document.getElementById('chinaMap');

					this.$echarts.init(chartDom).dispose()
					this.myChart = this.$echarts.init(chartDom, 'dark');
					this.$echarts.registerMap("china", chinaJson);


					this.myChart.setOption({
						// 背景色
						backgroundColor: "",
						tooltip: {
							trigger: "item",
							show: false,
						},
						// 配置项(组件)
						geo: [{
								map: "china",
								aspectScale: 0.75,
								top: '30%',
								// 图层
								zoom: 1,
								zlevel: 0,
								center: null,
								label: {
									normal: {
										// 显示文字
										show: false,
										textStyle: {
											color: "#ffffff",
										},
									},
									emphasis: {
										show: false,
										textStyle: {
											color: "#ffffff",
										},
									},
								},
								itemStyle: {
									// 标准
									normal: {
										areaColor: {
											image: domImg,
											repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
										},
										borderWidth: 1,
										borderColor: 'rgba(136, 232, 250, .5)',
									},
									emphasis: {
										areaColor: {
											image: domImg,
											repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
										},
										borderWidth: 2,
										borderColor: 'rgba(136, 232, 250, .4)',
										shadowColor: "rgba(136, 232, 250, .4)",
										shadowOffsetX: 0,
										shadowOffsetY: 5,
										shadowBlur: 20,
									},
								},
								regions: [
									...this.regionsList
								],

							},
							{
								map: "china",
								aspectScale: 0.75,
								top: '31%',
								// 图层
								zoom: 1.02,
								zlevel: -1,
								label: {
									normal: {
										show: false,
									},
									emphasis: {
										show: false,
									},
								},
								itemStyle: {
									// 标准
									normal: {
										borderJoin: "round",
										borderColor: "rgba(176,228,252,.6)",
										borderWidth: 1,
										areaColor: "rgba(176,228,252,.2)",
									},
									emphasis: {
										borderColor: "rgba(176,228,252,.6)",
										borderWidth: 1,
										areaColor: "rgba(176,228,252,.2)",
									},

								},
								regions: [{
									name: "南海诸岛",
									itemStyle: {
										normal: {
											opacity: 0, // 为 0 时不绘制该图形
										}
									},
								}, {
									name: "100000_JD",
									itemStyle: {
										opacity: 0,
									},
								}],
							},
							{
								map: "china",
								aspectScale: 0.75,
								top: '30%',
								zoom: 1,
								zlevel: -2,
								label: {
									normal: {
										show: false,
									},
									emphasis: {
										show: false,
									},
								},
								itemStyle: {
									// 标准
									normal: {
										// shadowColor: "rgba(14, 29, 51, 0.9)",
										// shadowOffsetX:-4,
										// shadowOffsetY: 20,
										borderJoin: "round",
										borderColor: "rgba(136, 232, 250, 1)",
										borderWidth: 4,
									},
									emphasis: {
										// shadowColor: "rgba(14, 29, 51, 0.9)",
										// shadowOffsetX: -4,
										// shadowOffsetY: 20,
										borderJoin: "round",
										borderColor: "rgba(136, 232, 250, 1)",
										borderWidth: 4,
									},
								},
								regions: [{
									name: "南海诸岛",
									itemStyle: {
										opacity: 0,

									},
								}, {
									name: "100000_JD",
									itemStyle: {
										opacity: 0,
									},
								}, {
									name: "海南省",
									itemStyle: {
										borderWidth: 2,
									},
								}],
							},

							{
								map: "china",
								aspectScale: 0.75,
								top: '30%',
								zoom: 1,
								zlevel: -3,
								label: {
									normal: {
										show: false,
									},
									emphasis: {
										show: false,
									},
								},
								itemStyle: {
									// 标准
									normal: {
										shadowColor: "rgba(14, 29, 51, 0.9)",
										shadowOffsetX: -2,
										shadowOffsetY: 22,
										borderWidth: 0,
									},
									emphasis: {
										shadowColor: "rgba(14, 29, 51, 0.9)",
										shadowOffsetX: -2,
										shadowOffsetY: 22,
										borderWidth: 0,
									},
								},
								regions: [{
									name: "南海诸岛",
									itemStyle: {
										opacity: 0,
									},
								}, {
									name: "100000_JD",
									itemStyle: {
										opacity: 0,
									},
								}],
							},
						],
						series: [],
					});


					//点击前往详情页
					this.myChart.on("click", (e) => {
						if (this.areaList?.findIndex((item) => item.name == e.name) > -1) {
							this.$router.push({
								name: "Undertaking",
								params: {
									mapName: e.name,
									mapTitle: this.areaList?.find((item) => item.name == e.name)
										?.title
								},
							})
						}
					})


					//高亮轮播
					this.setHighlight()

					//鼠标移入，停止高亮轮播
					this.myChart.on("mouseover", (e) => {
						if (this.areaList?.findIndex((item) => item.name == e.name) > -1) {
							clearInterval(highLightTime)
							this.highIndex = 0
							this.setHighlight(false, e.name)
						}

					})
					//鼠标移出，重新开始高亮轮播
					this.myChart.on("mouseout", (e) => {
						if (this.areaList?.findIndex((item) => item.name == e.name) > -1) {
							if (highLightTime) clearInterval(highLightTime)
							this.highIndex = 0
							this.setHighlight()
						}
					})

				}, 100)
			},
			//高亮轮播
			setHighlight(isHighlight = true, name = '') {
				let option = this.myChart.getOption()
				if (isHighlight) {
					if (highLightTime) clearInterval(highLightTime)
					highLightTime = setInterval(() => {
						//高亮显示所有regions
						if (this.highIndex == this.regionsList.length) {
							option.geo[0].regions = [
								...this.regionsList
							]
							option.geo?.map((item, index) => {
								option.geo[index].center = null
								if (index == 1) {
									option.geo[index].zoom = 1.02
									option.geo[index].top = '31%'
								} else {
									option.geo[index].zoom = 1
									option.geo[index].top = '30%'
								}
							})
							this.myChart.setOption(option)
							this.highIndex = 0

						} else {
							option.geo[0].regions = [
								this.regionsList[this.highIndex]
							]
							option.geo?.map((item, index) => {
								option.geo[index].center = this.areaList[this.highIndex]?.center
								if (index == 1) {
									option.geo[index].zoom = 1.52
									option.geo[index].top = '21%'
								} else {
									option.geo[index].zoom = 1.5
									option.geo[index].top = '20%'
								}
							})
							this.myChart.setOption(option)
							// this.myChart.dispatchAction({
							// 	type: "showTip",
							// 	geoIndex: 0,
							// 	name: this.areaList[this.highIndex]?.name,
							// })
							this.highIndex++
						}

					}, 4000)
				} else {
					const mouseIndex = this.areaList?.findIndex((item) => item.name == name)
					option.geo[0].regions = [
						this.regionsList[mouseIndex]
					]
					this.myChart.setOption(option)
				}


			}


		}



	};
</script>


<style lang="less">
	@import "./styles.less";

	.mapView {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: 10;
		height: 100%;
		background: url('../../assets/img/map-back.png') no-repeat;
		background-size: 100% 100%;
	}

	.tooltip-box-style {
		// background: url('../../assets/img/Business.png') no-repeat;
		// background-size: 100% 100%;
		padding: 1vh;
		box-shadow: rgba(136, 232, 250, 0.6) 0 4px 10px ;
	}

	.tool-box-title1 {
		font-size: 1.8vh
	}

	.tool-box-title2 {
		margin-top: 1vh;
		font-size: 1.6vh
	}
</style>