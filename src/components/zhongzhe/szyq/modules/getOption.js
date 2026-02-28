function nowSize(val, initWidth = 1920) {
	let nowClientWidth = document.documentElement.clientWidth;
	return val * (nowClientWidth / initWidth);
}
const gsPie = (option) => {
	let total=option.reduce((prev,next)=>{
		return prev+=next.value
	},0)
	return {
		backgroundColor: '',
		title: {
			text: total, //主标题文本
			subtext: '企业总数', //副标题文本
			left: "24%",
			top: "36%",
			textAlign: 'center',
			textStyle: {
				fontWeight: "500",
				fontSize: nowSize(12),
				lineHeight: nowSize(20),
				color: "#fff",
			},
			subtextStyle: {
				fontSize: nowSize(11),
				color: "#fff",
			},
		},
		legend: {
			orient: 'vertial',
			top: 'center',
			right: '5%',
			itemWidth: nowSize(10),
			itemHeight: nowSize(10),
			itemGap: nowSize(20),
			icon: "circle",
			data: option.map((item) => {
				return item.name
			}),
			formatter: function(name) {
				let data;
				option.map((item) => {
					if (name === item.name) {
						data = item.value;
					}
				});
				return `${name}：{data|${data}} `
			},
			textStyle: {
				fontSize: nowSize(14),
				color: '#ffffff',
				rich: { //formatter自定义样式
					data: {
						color: '#50D1FF',
						fontSize: nowSize(22),
						fontWeight: 500,
					}
				},
			},
		},
		tooltip: {
			trigger: 'item',
		},
		graphic: {
			elements: [{
				type: 'image',
				style: {
					image: require('../../../../assets/img/pieBack.png'),
					width: nowSize(146),
					height: nowSize(146),

				},
				left: '5%',
				top: '5%'
			}, ]
		},

		// color: ['#5FD5FC', '#FFFFFF', '#FFDE54'],
		series: [{
			type: 'pie',
			radius: ['70%', '80%'],
			center: ['25%', '50%'],
			color: ['#5FD5FC', '#FFFFFF', '#FFDE54'],
			label: {
				show: false,
				formatter: '{d}%',
				color: '#ffffff'
			},
			emphasis: {},
			labelLine: {
				length: 5
			},
			itemStyle: {
				borderRadius: 5,
			},

			data: option
		}, {
			type: 'pie',
			selectedMode: 'single',
			radius: ['40%', '50%'],
			center: ['25%', '50%'],
			label: {
				show: false,
				formatter: '{d}%',
				color: '#ffffff'
			},
			emphasis: {},
			labelLine: {
				length: 5
			},
			tooltip: {
				show: true
			},
			itemStyle: {
				borderRadius: 0,
				normal: {
					color: function(colors) {
						var colorList = [{
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
									offset: 0,
									color: "#98ECFE" // 0% 处的颜色
								},
								{
									offset: 1,
									color: "rgba(95, 213, 252, 0.10)", // 100% 处的颜色
								},
							],
							global: false // 缺省为 false
						}, {
							type: 'linear',
							x: 0,
							y: 1,
							x2: 0,
							y2: 0,
							colorStops: [{
									offset: 0,
									color: "rgba(255, 255, 255, 1)" // 0% 处的颜色
								},
								{
									offset: 1,
									color: "rgba(255, 255, 255, 0.10)", // 100% 处的颜色
								},
							],
							global: false // 缺省为 false
						}];
						return colorList[colors.dataIndex]
					}
				}
			},
			data: option
		}]
	}
}

const zsrzLine = (option) => {
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
			name: '单位（家）',
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

const qytjPie = (option) => {
	return {
		backgroundColor: '',
		legend: {
			show: false,
			orient: 'vertial',
			top: '0',
			right: '0',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 16,
			icon: "circle",
			formatter: function(name) {
				let data;
				option.map((item) => {
					if (name === item.name) {
						data = item.value;
					}
				});
				return `{name|${name}}${data}人 `
			},
			textStyle: {
				fontSize: 15,
				color: '#ffffff',
				rich: { //formatter自定义样式
					name: {
						color: '#ffffff',
						width: 80,
						fontSize: 14,
					}
				},
			},

		},
		graphic: {
			elements: [{
				type: 'image',
				style: {
					image: require('../../../../assets/img/xsjkBack.png'),
					width: nowSize(148),
					height: nowSize(148),

				},
				left: 'center',
				top: 'center'
			}, ]
		},
		tooltip: {
			trigger: 'item',
			formatter: function(params) {
				return `${params.marker}${params.name} <br/>${params.value} ${params.percent}% `
			}
		},
		color: ['#006CD1', '#70B7FA', '#F2D34C', '#4FC9B5'],
		series: [{
			type: 'pie',
			radius: ['52%', '70%'],
			center: ['50%', '50%'],
			label: {
				show: false,
				formatter: '{d}%',
				color: '#ffffff'
			},
			emphasis: {},
			labelLine: {
				length: 2
			},
			data: option
		}]
	}
}

const ydtjLine = (option) => {
	return {
		backgroundColor: '',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			textStyle: {
				fontSize: nowSize(12),

			}
		},
		legend: {
			right: '0',
			top: '0',
			itemWidth: nowSize(8),
			itemHeight: nowSize(8),
			icon: "circle",
			textStyle: {
				fontSize: nowSize(12),
			}
		},
		grid: {
			left: '5%',
			right: '5%',
			bottom: '0%',
			top: '20%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: option.map((item) => {
				return item.name
			}),
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				inside: false,
				textStyle: {
					fontSize: nowSize(12),
				}

			}
		}],
		yAxis: [{
			type: 'value',
			name: '单位（kw）',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					fontSize: nowSize(12),
				}
			}
		}],
		color: [{
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
					offset: 0,
					color: "rgba(22, 127, 255, 1)", // 0% 处的颜色
				},
				{
					offset: 1,
					color: "rgba(73, 196, 235, 0.1500)", // 100% 处的颜色
				},
			],
			global: false // 缺省为 false
		}, {
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
					offset: 0,
					color: "rgba(255, 143, 41, 1)", // 0% 处的颜色
				},
				{
					offset: 1,
					color: "rgba(190, 205, 239, 0.1600)", // 100% 处的颜色
				},
			],
			global: false // 缺省为 false
		}, 'rgba(45, 205, 255, 1)'],
		series: [{
				name: 'A区',
				type: 'bar',
				barWidth: nowSize(10),
				barGap: 0,
				emphasis: {
					focus: 'series'
				},
				data: option.map((item) => {
					return item.number1
				}),

			},
			{
				name: '交易中心',
				type: 'bar',
				barWidth: nowSize(10),
				emphasis: {
					focus: 'series'
				},
				data: option.map((item) => {
					return item.number2
				}),
			},
			{
				name: '宿舍食堂',
				type: 'line',
				emphasis: {
					focus: 'series'
				},
				areaStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
								offset: 0,
								color: "rgba(45, 205, 255, 1)", // 0% 处的颜色
							},
							{
								offset: 1,
								color: "rgba(255, 255, 255, 0)", // 100% 处的颜色
							},
						],
						global: false,
					},
				},
				data: option.map((item) => {
					return item.number3
				}),
			},
		]
	};
};

const ystjLine = (option) => {
	return {
		backgroundColor: '',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			},
			textStyle: {
				fontSize: nowSize(12),

			}
		},
		legend: {
			right: '0',
			top: '0',
			itemWidth: nowSize(8),
			itemHeight: nowSize(8),
			icon: "circle",
			textStyle: {
				fontSize: nowSize(12),
			}
		},
		grid: {
			left: '5%',
			right: '5%',
			bottom: '0%',
			top: '20%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: option.map((item) => {
				return item.name
			}),
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				inside: false,
				textStyle: {
					fontSize: nowSize(12),
				}

			},
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(255,255,255,0.1)'
				}
			},
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					fontSize: nowSize(12),
				}
			}
		}],
		color: ['rgba(255, 139, 35, 1)', 'rgba(102, 225, 223, 1)'],
		series: [{
				name: '北区',
				type: 'line',
				smooth: true,
				emphasis: {
					focus: 'series'
				},
				areaStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
								offset: 0,
								color: "rgba(255, 139, 35, 0.2)", // 0% 处的颜色
							},
							{
								offset: 1,
								color: "rgba(255, 255, 255, 0)", // 100% 处的颜色
							},
						],
						global: false,
					},
				},
				data: option.map((item) => {
					return item.number1
				}),
			},
			{
				name: '南区',
				type: 'line',
				smooth: true,
				emphasis: {
					focus: 'series'
				},
				areaStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
								offset: 0,
								color: "rgba(102, 225, 223, 0.2)", // 0% 处的颜色
							},
							{
								offset: 1,
								color: "rgba(255, 255, 255, 0)", // 100% 处的颜色
							},
						],
						global: false,
					},
				},
				data: option.map((item) => {
					return item.number2
				}),
			},
		]
	};
};

const yqysLine = (option) => {
	return {
		backgroundColor: '',
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			show:false,
			right: nowSize(10),
			itemWidth: nowSize(10),
			itemHeight: nowSize(10),
			icon: "rect",
		},
		grid: {
			top:'15%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},

		xAxis: {
			type: 'category',
			data: option.map((item) => {
				return item.name
			}),
		},
		yAxis: {
			type: 'value',
			name: '万人',
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLabel: {
				textStyle: {
					fontSize: nowSize(12),
				}
			}
		},
		color: [{
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
					offset: 0,
					color: "#159AFF", // 0% 处的颜色
				},
				{
					offset: 1,
					color: "rgba(0, 89, 84, 0)", // 100% 处的颜色
				},
			],
			global: false // 缺省为 false
		}, {
			type: 'linear',
			x: 0,
			y: 0,
			x2: 0,
			y2: 1,
			colorStops: [{
					offset: 0,
					color: "#66E1DF", // 0% 处的颜色
				},
				{
					offset: 1,
					color: "rgba(0, 89, 84, 0)", // 100% 处的颜色
				},
			],
			global: false // 缺省为 false
		}],
		series: [{
			name: '系列1',
			type: 'pictorialBar',
			barCategoryGap: '-20%',                   
			symbol: 'image://' + require('../../../../assets/img/yqysIcon.png'),
			data: option.map((item) => {
				return item.value
			}),
			// symbolOffset: ['20%', '0'],
			backgroundStyle: {
				// color: 'rgba(21, 154, 255, 1)',
			},
		}]
	}
}

export {
	gsPie,
	zsrzLine,
	qytjPie,
	ydtjLine,
	ystjLine,
	yqysLine
}
