<!-- 居民之声 -->
<template>
	<div class="map-style-home">
		<div id="map-jizhu"></div>
	</div>
</template>


<script>
	import AMapLoader from "@amap/amap-jsapi-loader";
	// import yinzhou from "../../../../assets/data/quyu.json"
	// 设置安全密钥
	window._AMapSecurityConfig = {
		securityJsCode: "617601284d0feb5230f2efe5d163a6aa",
	};
	export default {
		name: "map-area",
		data() {
			return {
				activeIndex: "",

				gdmap: null,
				mapList: [{
					latitude: 29.82,
					longitude: 121.55,
				}]

			};
		},
		mounted() {},
		created() {
			this.initGdMap();
			window.closeInfoWindow = this.closeInfoWindow;
		},

		methods: {
			initGdMap() {
				AMapLoader.load({
						key: "de63e8961219f25f5c1195b5b1180791",
						version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
						// "plugins": [地图用到的插件], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
					})
					.then((AMap) => {
						// 初始化地图
						this.gdmap = new AMap.Map("map-jizhu", {
							viewMode: "2D", //  是否为3D地图模式、
							mapStyle: "amap://styles/grey", //主题
							zoom: 12, // 初始化地图级别
							center: [121.55, 29.82], //中心点坐标
							resizeEnable: true,
						});
						let _this = this;
						this.gdmap.on("complete", function() {
							console.log("地图加载完成！");
							// let polygon = new AMap.Polygon({
							// 	path: yinzhou,
							// 	fillColor: '#ccebc5',
							// 	strokeOpacity: 1,
							// 	fillOpacity: 0.5,
							// 	strokeColor: '#2b8cbe',
							// 	strokeWeight: 1,
							// 	strokeStyle: 'dashed',
							// 	strokeDasharray: [5, 5],
							// });

							// _this.gdmap.add(polygon);
							let markers = [];
							let markers1 = _this.mapList.map((item) => {
								return {
									htmlBox: `<div class="mapitem-home">
							<img src=${require("../../../../assets/img/mapIcon.png")} class="mapitem-img"/>
							</div>`,
									position: [item.longitude, item.latitude],
									anchor: "bottom-center",
									orgName: item.orgName,
								};
							});
							markers = [...markers1]
							markers.forEach(function(marker) {
								new AMap.Marker({
									map: _this.gdmap,
									icon: marker.icon,
									content: marker.htmlBox,
									position: [marker.position[0], marker.position[1]],
									// offset: new AMap.Pixel(-30, -180),
									anchor: "bottom-center", // 设置锚点方位
								});
								// newMarker.on("click", () => {
								// 	let infoWindow = new AMap.InfoWindow({
								// 		anchor: "middle-left",
								// 		isCustom: true, //使用自定义窗体
								// 		content: _this.createInfoWindow(index, marker),
								// 		offset: new AMap.Pixel(20, 20),
								// 	});
								// 	infoWindow.open(_this.gdmap, newMarker.getPosition());
								// });
							});
							_this.gdmap.add(markers);
						});
					})
					.catch((e) => {
						console.log(e);
					});
			},
			createInfoWindow(index, marker) {
				console.log(marker, index);
				let content = `
				<div class="jizhu-map-pop">
					<img class="map-pop-home-cancel" onClick="closeInfoWindow(${index})" src="${require("../../../../assets/img/cancel.png")}"></img>
					   <div class="jizhu_circle">${marker.orgName}</div>
					   <div class="jizhu_body">
							<div class="jizhu_left">合格率</div>
							<div class="jizhu_right">60%</div>
					   </div>
				</div>`;
				return content;
			},
			closeInfoWindow() {
				this.gdmap.clearInfoWindow();
			},
			changeActive(index) {
				this.activeIndex = index;
			},
		},
	};
</script>


<style lang="less">
	.map-style-home {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 15;
		top: 0;

	}


	#map-jizhu {
		overflow: hidden;
		width: 100%;
		height: 100%;
		margin: 0;
		font-family: "微软雅黑";
	}

	.jizhu-map-pop {
		position: relative;
		// background: url("../../../../assets/home/mapPopBack.png") no-repeat;
		// background-size: 100% 100%;
		min-width: 200px;
		padding: 12px 12px;
		box-sizing: border-box;
	}

	.mapitem-home {
		position: relative;
	}

	.mapitem-img {
		height: 10vh;
	}
</style>
