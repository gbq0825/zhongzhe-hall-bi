<template>
	<div class="mapView">
		<div id="chinaMap1" style="width: 100%;height: 100%;"></div>


	</div>
</template>
<script>
	import chinaJson from '../../../../assets/data/china.json'
	import 'echarts-gl'

	export default {
		props: ['mapName','mapTitle'],
		data() {
			return {
				NONES: ['', null, undefined],

				mapCharts: null,
				areaList: []

			}
		},
		//调用
		created() {
			

		},
		mounted() {
			console.log('yyyy', this.mapName)
			this.areaList = [{
				name: '四川省',
				title: '新材料事业部'
			}, {
				name: '河南省',
				title: '服装事业部'
			}, {
				name: '江苏省',
				title: '服装事业部'
			}, {
				name: '浙江省',
				title: '服装事业部'
			}, {
				name: '广东省',
				title: '消费电子事业部'
			}]

			this.drawChinaMap()
		},
		methods: {

			drawChinaMap() {
				let domImg = document.createElement("img");
				domImg.src = require('../../../../assets/img/mapback.jpg')
				setTimeout(() => {

					let chartDom = document.getElementById('chinaMap1');

					this.$echarts.init(chartDom).dispose()
					let myChart = this.$echarts.init(chartDom, 'dark');
					this.$echarts.registerMap("china", chinaJson);

				
					myChart.setOption({
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
								top: '18%',
								// 图层
								zoom: 1,
								zlevel: 0,
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
								regions: [{
										name: "南海诸岛",
										itemStyle: {
											normal: {
												borderWidth: 1,
												borderColor: 'rgba(136, 232, 250, 1)',
											},
											emphasis: {
												borderWidth: 1,
												borderColor: 'rgba(136, 232, 250, 1)',
											}
										},
									},
									{
										name: this.mapName,
										label: {
											normal: {
												show: true,
												formatter: this.mapTitle,
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
										tooltip: {
											show: true,
											padding: [0, 0],
											// borderWidth: 1,
											borderColor:'rgba(136, 232, 250, 1)',
											backgroundColor: 'rgba(0, 17, 50, 0.6)',
											formatter: () => {
												let html = `<div class="tooltip-box-style">
															<div class="tool-box-title1">${this.mapName}</div>
															<div  class="tool-box-title2">${this.mapTitle}</div>
														</div>`
												return html
											},
											textStyle: {
												color: '#ffffff',
											}
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
								],

							},
							{
								map: "china",
								aspectScale: 0.75,
								top: '19%',
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
								top: '18%',
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
								top: '18%',
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
				}, 100)
			}
		}
	};
</script>


<style lang="less" scoped>
	.mapView {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		z-index: 10;
		height: 100%;
		background: url('../../../../assets/img/map-back.png') no-repeat;
		background-size: 100% 100%;
	}
</style>