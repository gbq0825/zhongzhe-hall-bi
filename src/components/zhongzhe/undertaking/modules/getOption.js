function nowSize(val, initWidth = 1920) {
	let nowClientWidth = document.documentElement.clientWidth;
	return val * (nowClientWidth / initWidth);
}


const salscLine = (option) => {
	return {
		backgroundColor: 'transparent',
		grid: {
			left: '5%',
			right: '5%',
			bottom: '2%',
			top: '20%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line'
			}
		},
		xAxis: {
			data: option.map((item) => {
				return item.name
			}),
			type: 'category',
			axisTick: {
				alignWithLabel: true //保证刻度线和标签对齐
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(207, 222, 239, 0.1)'
				}
			}

		},
		yAxis: {
			type: 'value',
			name: '万元',
			nameLocation: 'end',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(207, 222, 239, 0.1)'
				}

			},
		},
		color: ['#FFDE65'],
		series: [{
			type: 'line',
			smooth: true,
			data: option.map((item) => {
				return item.value
			}),
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: "rgba(255,222,101, 0.6)", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "rgba(255, 255, 255, 0)", // 100% 处的颜色
						},
					],
					global: false,
				},
			},
		}, ]
	}
}

const monthLine = (option) => {
	return {
		backgroundColor: 'transparent',
		grid: {
			left: '5%',
			right: '5%',
			bottom: '2%',
			top: '20%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'line'
			}
		},
		xAxis: {
			data: option.map((item) => {
				return item.name
			}),
			type: 'category',
			axisTick: {
				alignWithLabel: true //保证刻度线和标签对齐
			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(207, 222, 239, 0.1)'
				}
			}

		},
		yAxis: {
			type: 'value',
			name: '万元',
			nameLocation: 'end',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(207, 222, 239, 0.1)'
				}

			},
		},
		color: ['#66E1DF'],
		series: [{
			type: 'line',
			smooth: true,
			data: option.map((item) => {
				return item.value
			}),
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: "rgba(102, 225, 223, 0.6)", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "rgba(255, 255, 255, 0)", // 100% 处的颜色
						},
					],
					global: false,
				},
			},
		}, ]
	}
}

const jyzx_rcxy = (option, myColor) => {
	return {
		backgroundColor: '',
		// graphic: {
		// 	elements: [{
		// 		type: 'image',
		// 		style: {
		// 			image: require('../../../../assets/img/yibiaoBack.png'),
		// 			width: 170,
		// 			height: 120,

		// 		},
		// 		left: 'center',
		// 		top: '5'
		// 	}, ]
		// },
		series: [{
				type: 'gauge',
				center: ['50%', '50%'],
				startAngle: 210,
				endAngle: -30,
				min: 0,
				max: 100,
				splitNumber: 12,
				itemStyle: {
					color: myColor
				},
				progress: {
					show: true,
					width: nowSize(11.5)
				},
				pointer: {
					show: false
				},
				axisLine: {
					lineStyle: {
						width: nowSize(11.5)
					}
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false,
				},
				anchor: {
					show: false
				},
				title: {
					// show: false
					color: '#FFFFFF',
					offsetCenter: [0, '30%'],
					fontSize: nowSize(14)
				},
				detail: {
					valueAnimation: true,
					width: '60%',
					lineHeight: 40,
					borderRadius: 8,
					offsetCenter: [0, '-15%'],
					fontSize: nowSize(18),
					fontWeight: 'bolder',
					formatter: function(value) {
						// return `{data|${(value*100).toFixed(2)}%}`
						return `{data|${value}%}`
					},
					textStyle: {
						color: '#7ADCFF',
						rich: { //formatter自定义样式
							data: {
								color: '#7ADCFF',
								fontSize: nowSize(28),
								fontWeight: 500,
							},
							name: {
								color: '#7ADCFF',
								fontSize: nowSize(28),
								fontWeight: 500,
							}
						},
					},
				},
				data: option
			},

		]
	}
}

const undertakingCircle = (option) => {
	return {
		backgroundColor: '',
		series: [{
				type: 'gauge',
				center: ['50%', '50%'],
				radius: '100%',
				startAngle: 210,
				endAngle: -30,
				min: 0,
				max: 100,
				splitNumber: 12,
				itemStyle: {
					color: '#70DEEE',
				},
				progress: {
					show: true,
					width: nowSize(10),
					roundCap: true
				},
				pointer: {
					show: false
				},
				axisLine: {
					lineStyle: {
						width: nowSize(11.5),
						color: [
							[1, 'RGBA(60, 98, 159, 0.6)']
						]
					},
					roundCap: true
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				axisLabel: {
					show: false,
				},
				anchor: {
					show: false
				},
				title: {
					// show: false
					color: '#FFFFFF',
					offsetCenter: [0, '20%'],
					fontSize: nowSize(14)
				},
				detail: {
					valueAnimation: true,
					width: '60%',
					lineHeight: 40,
					offsetCenter: [0, '-10%'],
					fontSize: nowSize(18),
					fontWeight: 'bolder',
					formatter: function(value) {
						return `{data|${value}%}`
					},
					textStyle: {
						color: '#7ADCFF',
						rich: { //formatter自定义样式
							data: {
								color: '#7ADCFF',
								fontSize: nowSize(28),
								fontWeight: 500,
							},
						},
					},
				},
				data: option
			},
			{
				type: 'gauge',
				startAngle: 210,
				endAngle: -30,
				min: 0,
				max: 100,
				splitNumber: 4,
				radius: '70%',
				axisLine: {
					lineStyle: {
						width: nowSize(4),
						color: [
							[0.258, '#2CFAFC'],
							[1, 'rgba(60, 98, 159, 0.6)']
						]
					},
					roundCap: true
				},
				
				axisTick: {
					distance: -nowSize(5),
					length: nowSize(6),
					lineStyle: {
						color: 'rgba(12, 29, 57, 1)',
						width: nowSize(6)
					}
				},
				splitLine: {
					show:false
				},
				axisLabel: {
					show: false,
				},
				detail: {
					show: false,
				},
				pointer: {
					show: false,
				},

			}

		]
	}
}

export {
	salscLine,
	monthLine,
	jyzx_rcxy,
	undertakingCircle
}