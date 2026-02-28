<!-- 居民之声 -->
<template>
	<div class="map-style">
		<div id="mapid"></div>
	</div>
</template>


<script>
	import L from "leaflet";
	import statesData from "../../../assets/data/beilun.json";
	// import statesData1 from "../../../assets/data/yinzhouqu.json";
	import '../../../assets/data/leaflet-heat.js'; 
	var numbers
	export default {
		name: "map-area",
		data() {
			return {
				//地图
				geojson: null,
				map: null,
				statesData: {},
				markerHovers: [],
				dataIndex: 1,

				lats: [
					[29.538, 121.96], //宁波市鄞州中学
					[29.576, 121.96], //宁波市新城第一实验学校
					[29.479, 121.89], //正始中学
					[29.474, 121.98], //鄞州区东钱湖中学
					[29.488, 122.01], //宁波外国语学校
					[29.488, 122.07], //瞻岐镇中学小学]

				],
				rangeNumber: 0,
				isActive: false

			};
		},
		created() {

		},
		mounted() {
			//<!-- 以下为地图操作部分 -->
			this.map = L.map("mapid", {
				maxZoom: 11.7, //宁波市9，北仑区2
				minZoom: 7, //宁波市9，北仑区2
				zoom: 11, //宁波市9，北仑区2
				center: [29.8605, 121.9425], // 宁波市[29.8,121.5]，北仑区[-30, -70]
				// center: [29.474, 121.975], // 宁波市[29.8,121.5]，北仑区[-30, -70]
				zoomControl: true,
				dragging: true,
				doubleClickZoom: false,
				zoomSnap: 0.1,
			});
			this.map.invalidateSize(true);
			this.initMap();

		},
		methods: {
			initMap() {
				this.removeHoverMarker();


				if (this.geojson !== null && this.geojson !== undefined) {
					this.map.removeLayer(this.geojson);
				}

				var imageUrl = require("../../../assets/warnning/bg.png"),
					imageBounds = [
						[29.527, 121.239],
						[30.194, 122.592],
					];
				L.imageOverlay(imageUrl, imageBounds, {
					crossOrigin: true
				}).addTo(
					this.map
				);

				this.geojson = L.geoJson(statesData, {
					style: this.style,
					onEachFeature: this.onEachFeature,
				}).addTo(this.map);
				
				// this.geojson = L.geoJson(statesData1, {
				// 	style: this.style,
				// 	onEachFeature: this.onEachFeature,
				// }).addTo(this.map);

				// 这里是社区markers

				L.heatLayer([
					[29.8605, 121.9425,200]
					// ...
				], {
					max: 200,
					radius: 25
				}).addTo(this.map);

				// this.drawCommunityMarkers();

				// this.drawRainMarkers();
			},
			drawCommunityMarkers() {
				var layers = [];
				const markers = [];

				const icons = [
					require("../../../assets/panoramic/micon1.png"),
					require("../../../assets/panoramic/micon2.png"),
					require("../../../assets/panoramic/micon3.png"),
				];


				let latLngs = this.lats[this.dataIndex].data


				let datas = []
				let newarr = []
				if (this.dataIndex == 3) {
					this.dataLists.map((item) => {
						newarr.push(item.data)
					})
					datas = newarr.flat()
				} else {
					datas = this.dataLists[this.dataIndex].data
				}






				latLngs.forEach((_, index) => {
					let htmlBox =
						`<div class="map_icon"><img src="${icons[datas[index].type]}"> <div class="icon_title">${datas[index].title}</div></div>`

					let htmlBox2 = `<img src="${icons[datas[index].type]}">`
					var myIcon = L.divIcon({
						// html: htmlBox2,
						html: index == this.rangeNumber ? htmlBox : htmlBox2,
						className: `${index==this.rangeNumber?"my-div-icon-active":"my-div-icon1"}`,
						// className: "my-div-icon1",
						iconSize: [57, 45],
						iconAnchor: [30, 10],
					});
					let html = ``
					if (this.dataIndex == 1) {
						html += `
						  <div class="learn-tooltip-titles">${datas[index].title}</div>
						  <ul class="commuty-uls">
						    <li>成人高中学员：<span>${datas[index].number1}</span>人</li>
							<li>老年大学学员：<span>${datas[index].number2}</span>人</li>
							<li>专职教师：<span>${datas[index].number3}</span>人</li>
							<li>兼职教师：<span>${datas[index].number4}</span>人</li>
						  </ul>
						`;
					} else {
						html += `
						  <div class="learn-tooltip-titles">${datas[index].title}</div>
						  <ul class="commuty-uls">
						    <li>学生：<span>${datas[index].number1}</span>人</li>
							<li>${this.dataIndex==0?'在职教师':this.dataIndex==1?'成校教师':'社区达人'}：<span>${datas[index].number2}</span>人</li>
						  
						  </ul>
						`;
					}

					// var customOptions = {
					// 	'maxWidth': '500',
					// 	'className': 'toright'
					// }

					var customOptions = {
						'closeButton': false
					}
					if (index == 3 || index == 5 || index == 9) {
						customOptions = {
							'className': 'toright',
							'closeButton': false
						}
					}


					let marker = L.marker(_, {
						icon: myIcon
					});
					this.markerHovers.push(marker);
					if (index == this.rangeNumber) {
						marker
							.addTo(this.map)
							.on({
								"mouseover": () => {
									clearInterval(numbers);
									// this.handlePoint(_, index);
									this.isActive = true
									marker.bindPopup(html).openPopup();
								},

								"mouseout": () => {
									numbers = setInterval(() => {
										if (this.rangeNumber < 11) {
											this.rangeNumber++
											this.mapCreate()
										} else {
											this.rangeNumber = 0
											this.mapCreate()
										}
									}, 5000);
									this.isActive = false
									// this.handlePoint(_, index);
									marker.bindPopup(html).closePopup();
								}
							})
							.bindPopup(html, customOptions)
							.openPopup();
					} else {

						marker
							.addTo(this.map)
							.on({
								"mouseover": () => {
									clearInterval(numbers);
									this.rangeNumber = index
									this.mapCreate()
									// this.handlePoint(_, index);
									this.isActive = true
									marker.bindPopup(html).openPopup();
								},

								"mouseout": () => {
									numbers = setInterval(() => {
										if (this.rangeNumber < 11) {
											this.rangeNumber++
											this.mapCreate()
										} else {
											this.rangeNumber = 0
											this.mapCreate()
										}
									}, 5000);
									this.isActive = false
									// this.handlePoint(_, index);
									marker.bindPopup(html).closePopup();
								}
							})
						// .bindPopup(html)
						// .openPopup();
					}
					markers.push(marker);
				});
				layers.push(markers);
			},
			drawRainMarkers() {
				var layers = [];
				const markers = [];
				const latLngs = [
					[29.45, 121.95],
					[29.48, 121.96],
					[29.46, 121.967],
					[29.46, 122.01],

					[29.45, 121.89],
					[29.46, 121.873],
					[29.465, 121.92],
					[29.5, 121.9],

					[29.54, 121.96],
					[29.53, 121.99],
					[29.53, 121.9],
					[29.52, 121.83],
					[29.55, 121.87],
					[29.55, 121.9],
					[29.57, 121.94],
					[29.589, 121.905],

					[29.53, 121.95],
					[29.5, 122.105],
					[29.5, 122.05],
					[29.46, 122.08],
					[29.47, 122.05],
					[29.54, 122.02],
					[29.585, 121.96],
				];
				latLngs.forEach((_) => {
					const myIcon = L.icon({
						iconUrl: require("../../../assets/learnimg/icon5.png"),
						iconSize: [28, 38],
						iconAnchor: [14, 19],
					});

					let marker = L.marker(_, {
						icon: myIcon
					});
					marker.addTo(this.map);
					markers.push(marker);
				});
				layers.push(markers);
			},
			// // 防止多次触发鼠标移入移出事件
			// checkHover(e, target) {
			// 	if (this.getEvent(e).type == "mouseover") {
			// 		return !this.contains(target, this.getEvent(e).relatedTarget || this.getEvent(e).fromElement) && !((
			// 			this.getEvent(e)
			// 			.relatedTarget || this.getEvent(e).fromElement) === target);
			// 	} else {
			// 		return !this.contains(target, this.getEvent(e).relatedTarget || this.getEvent(e).toElement) && !((this
			// 			.getEvent(e)
			// 			.relatedTarget || this.getEvent(e).toElement) === target);
			// 	}
			// },

			// contains(parentNode, childNode) {
			// 	if (parentNode.contains) {
			// 		return parentNode != childNode && parentNode.contains(childNode);
			// 	} else {
			// 		return !!(parentNode.compareDocumentPosition(childNode) & 16);
			// 	}
			// },

			// getEvent(e) {
			// 	return e || window.event;
			// },

			handlePoint(latLng, index) {
				this.rangeNumber = index
				this.mapCreate()
				clearInterval(numbers);
				console.log(latLng, index);
			},
			removeHoverMarker() {
				if (this.markerHovers.length > 0) {
					this.markerHovers.forEach((e) => {
						this.map.removeLayer(e);
					});
				}
			},
			style() {
				const params = {
					weight: 1,
					opacity: 1,
					lineCap: "butt",
					color: "#50D1FF",
					dashArray: "2",
					fillOpacity: 0.3,
					fillColor: "#659FFF",
				};
				return params;
			},

			highlightFeature(e) {
				var layer = e.target;

				layer.setStyle({
					weight: 3,
					color: "#6A97FF",
					lineCap: "butt",
					opacity: 0.3,
					dashArray: "7",
					fillOpacity: 0.8,
					fillColor: "#6A97FF",
				});

				if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
					layer.bringToFront();
				}
			},

			resetHighlight(e) {
				this.geojson.resetStyle(e.target);
			},

			zoomToFeature() {
				// console.log(e)
				// 点击街道之后，需要刷新所有的数据
				// this.initData()
			},
			onEachFeature(feature, layer) {
				layer.on({
					mouseout: this.resetHighlight,
					click: this.zoomToFeature,
				});
				// var bounds = layer.getBounds();
				// var center = bounds.getCenter();
				// let iconSize = [236, 40];

				// var myIcon = L.divIcon({
				//   // html: feature.name,  //地图上显示街道名称
				//   className: "my-div-icon",
				//   iconSize: iconSize,
				//   zIndex: -1,
				// });
				// const marker = L.marker(center, { icon: myIcon }).addTo(this.map);
				// this.markerHovers.push(marker);
			},
		},
	};
</script>

<style scoped>
	@import "../styles.less";
</style>
