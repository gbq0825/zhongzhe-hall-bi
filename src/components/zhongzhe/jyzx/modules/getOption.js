
const morLine = (option) => {
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
		},]
	}
}




export {
	morLine,
}
