<template>
	<div class="myContent">
		<div class="myBody" style="width: 24vw;	pointer-events: auto;">
			<Title>
				<span slot="title">企业列表</span>
			</Title>
			<div class="contentBody">
				<!-- 	<vue-seamless-scroll style="height: 76vh;" class="seamless-warp-scroll" :data="dataList"
					:class-option="classOption"> -->
				<ul style="height: 80vh;" class="seamless-warp-scroll">
					<li v-for="(item,index) in dataList" :key="index" :class="{'activeItem':dataIndex==index}"
						@click="handleClick(index)">
						<span>{{item}}</span>
					</li>
				</ul>
				<!-- </vue-seamless-scroll> -->
			</div>

		</div>
		<div class="myBody " style="width: 24vw;pointer-events: auto;" v-if="showRight">
			<div class="dot-spinner" v-if="isLoading">
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
			</div>
			<Title>
				<span slot="title">{{dataList[dataIndex]}}</span>
			</Title>
			<div class="contentBody">
				<ul class="mediaView">
					<li v-for="(item,index) in monitorList" :key="index" :class="{two:true}">
						<img src="../../../../assets/img/quanping.png" class="quanping"
							@click="handleOpen(index,item.cameraIndexCode)" />
						<!-- <video class="video-js" :id="'video'+index" style="height: 100%;width: 100%;object-fit:contain;"
							controls="controls" autoplay>
							<source :src="item.vedioUrl?item.vedioUrl:''" type="application/x-mpegURL" />
						</video> -->
						<img :src="item.coverPic" class="mediaImg" />
						<div class="mediaTitle">{{item.cameraName}}</div>
					</li>
					<!-- <div class="loadmore" @click="handleLoadMore">{{status=='more'?'加载更多':'没有更多了'}}</div> -->
				</ul>

			</div>
			<el-pagination class="pagination" hide-on-single-page :current-page="pageNo" :pager-count="5"
				:page-size="10" background layout="prev, pager, next" :total="monitorTotal"
				@current-change="currentChange">
			</el-pagination>

		</div>
		<div v-if="showMedia" class="popBody">
			<div class="popImg">
				<img src="../../../../assets/img/close.png" class="close" @click="handleClose" />
				<video class="video-js" id="videoBig" width="100%" height="540px" controls="controls" autoplay>
					<!-- 	<source
						src="https://e-sign.dms.t.cn-np.com/files/m3u8_file/c4b94118-3c8d-4410-9987-985c2b44c278/c4b94118-3c8d-4410-9987-985c2b44c278.m3u8"
						type="application/x-mpegURL" /> -->
					<source :src="videoUrl" type="application/x-mpegURL" />
				</video>
			</div>
			<div class="popContent">
				<ul>
					<li>
						<img src="../../../../assets/img/icon1.png" />
						<div>2022-11-30 13:55:44</div>
					</li>
					<li>
						<img src="../../../../assets/img/icon2.png" />
						<div>{{NONES.includes(openIndex)?'': monitorList[openIndex].cameraName}}</div>
					</li>
					<li>
						<img src="../../../../assets/img/icon3.png" />
						<div>中哲控股集团有限公司</div>
					</li>
				</ul>
			</div>
		</div>


	</div>

</template>

<script>
	import Title from "../../Title.vue"
	import videojs from "video.js"
	import "video.js/dist/video-js.css";
	var freshTimer
	export default {
		components: {
			Title,
		},
		computed: {
			classOption() {
				return {
					step: 0.2, //数值越大速度滚动越快
					limitMoveNum: 3, //开始无缝滚动的数据量  //this.fourDatata.length
					hoverStop: true, //是否开启鼠标悬停stop
					direction: 1, // 0向下 1向上 2向左 3向右
					openWatch: true, //开启数据实时监控刷新dom
					singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
					singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
					waitTime: 1000, //单步运动停止的时间(默认值1000ms)
				};
			},
		},
		data() {
			return {
				NONES: ['', null, undefined],
				isLoading: false,
				dataList: [
					'中哲控股集团有限公司',
				],
				showRight: false,
				dataIndex: null,
				showMedia: false,
				status: 'more',
				pageNo: 1,
				monitorList: [],
				monitorTotal: 0,
				openIndex: null,
				vedioList: [],
				options: {
					autoplay: true, // 设置自动播放
					muted: true, // 设置了它为true，才可实现自动播放,同时视频也被静音（Chrome66及以上版本，禁止音视频的自动播放）
					preload: "auto", // 预加载
					controls: true, // 显示播放的控件
					fluid: true, //自适应宽高
				},
				videoBig: null,
				videoUrl: ''
			};
		},
		mounted() {
			this.vedioList = []
			this.pageNo = 1
			this.monitorList = []
		},
		beforeDestroy() {
			// if (this.vedioList.length > 0) {
			// 	this.vedioList.map((item, index) => {
			// 		this.vedioList[index].dispose()
			// 	})
			// }
			if (freshTimer) clearInterval(freshTimer)
			this.pageNo = 1
			this.monitorList = []
			if (this.videoBig) {
				this.videoBig.dispose()
			}
		},
		methods: {
			handleClick(index) {
				this.showRight = true
				this.dataIndex = index
				this.pageNo = 1
				this.monitorList = []
				this.queryMonitorList()
			},
			handleOpen(index, code) {
				this.openIndex = index
				this.queryMonistorUrl(code)
			},
			handleClose() {
				this.showMedia = false
				this.openIndex = null
				if (this.videoBig) {
					this.videoBig.dispose()
				}
			},
			handleLoadMore() {
				if (this.status == 'more') {
					this.pageNo++
					this.queryMonitorList()
				}
			},
			currentChange(current) {
				if (freshTimer) clearInterval(freshTimer)
				this.pageNo = current
				this.queryMonitorList()
			},
			async queryMonitorList(isfresh) {
				if (!isfresh) {
					this.isLoading = true
				}
				const params = {
					pageNo: this.pageNo,
					pageSize: 10,
				}
				const response = await this.$http.post('/nbgt/index/queryCameras', params)
				this.isLoading = false
				if (response.status == '200' && response.data.rspCode == '000000') {
					console.log(response.data)
					this.monitorTotal = response.data.data?.total
					this.monitorList = response.data.data?.list
					if (freshTimer) clearInterval(freshTimer)
					freshTimer = setInterval(() => {
						this.queryMonitorList(1)
					}, 10000)

					// if (response.data.data?.list?.length < 10) this.status = 'noMore'
					// this.monitorList = this.monitorList.concat(response.data.data?.list)

					// forÎ (let i = 0; i < response.data.data?.list.length; i++) {
					// 	this.queryMonistorDetail(response.data.data?.list[i], i)
					// }
				}
			},
			async queryMonistorDetail(item, i) {
				const params = {
					cameraIndexCode: item.cameraIndexCode,
				}
				const response = await this.$http.post('/nbgt/index/fetchCameraVideo', params)
				if (response.status == '200' && response.data.rspCode == '000000') {
					console.log(response.data)
					this.monitorList.push({
						...item,
						vedioUrl: response.data.data
					})
					setTimeout(() => {
						const videoId = 'video' + ((this.pageNo - 1) * 10 + i)
						this.vedioList[(this.pageNo - 1) * 10 + i] = videojs(videoId, this.options);
					}, 1000)
				}
			},
			async queryMonistorUrl(code) {
				this.isLoading = true
				const params = {
					cameraIndexCode: code,
				}
				const response = await this.$http.post('/nbgt/index/fetchCameraVideo', params)
				this.isLoading = false
				if (response.status == '200' && response.data.rspCode == '000000') {
					console.log(response.data)
					this.videoUrl = response.data.data
					this.showMedia = true
					this.$nextTick(() => {
						this.videoBig = videojs('videoBig', this.options);
					})
				}
			}
		},


	}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.rightBody {
		max-height: 50vh;
		overflow: hidden;

	}

	.myContent {
		display: flex;
		justify-content: space-between;
		height: 100%;

	}


	.seamless-warp-scroll {
		overflow: hidden;
	}

	.seamless-warp-scroll li {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px 0;


		background: linear-gradient(90deg, rgba(7, 10, 22, 0) 0%, rgba(13, 57, 98, 0.3) 46%, rgba(13, 57, 98, 0) 100%);
	}

	.activeItem {
		background: linear-gradient(90deg, rgba(7, 10, 22, 0) 0%, rgba(13, 57, 98, 0.75) 12%, #0D3962 47%, rgba(13, 57, 98, 0.81) 88%, rgba(13, 57, 98, 0) 100%) !important;
	}

	.seamless-warp-scroll li span {
		display: flex;
		justify-content: center;
		color: #ffffff;
		font-size: 1.6vh;
		cursor: pointer;
	}

	.seamless-warp-scroll li {
		&:not(:last-child) {
			::after {
				position: absolute;
				height: 1px;
				width: 80%;
				content: "";
				bottom: 0;
				left: 10%;
				background: linear-gradient(135deg,
						rgba(238, 238, 238, 0) 0%,
						#45a5c9 53%,
						rgba(255, 255, 255, 0) 100%);


			}
		}

	}

	.pagination {
		position: absolute;
		bottom: 1.5vh;
		left: 0;
		right: 0;
		text-align: center;
	}

	::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
		background-color: rgba(22, 100, 200, 0.8);
	}

	::v-deep .el-pagination.is-background .el-pager li,
	::v-deep .el-pagination.is-background .btn-prev,
	::v-deep .el-pagination.is-background .btn-next,
		{
		margin: 0 5px;
		background-color: rgba(13, 57, 98, 0.6);
		color: #ffffff;
		min-width: 30px;
		border-radius: 2px;
	}

	// ::v-deep .el-pagination.is-background .btn-next,
	// .el-pagination.is-background .btn-prev,
	// .el-pagination.is-background .el-pager li {
	// 	margin: 0 5px;
	// 	background-color: rgba(13, 57, 98, 0.75);
	// 	color: #606266;
	// 	min-width: 30px;
	// 	border-radius: 2px;
	// }


	.mediaView {
		max-height: 76vh;
		overflow-x: hidden;
		overflow-y: hidden;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		position: relative;


		&:hover {
			overflow-y: overlay;
		}

		&::-webkit-scrollbar {
			width: 4px !important;
			height: 6px !important;
		}

		&::-webkit-scrollbar-thumb {
			/*滚动条里面小方块*/
			border-radius: 10px;
			background: #999;
		}

		&::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			border-radius: 10px;
			background: #ddd;
		}


		li {
			margin-bottom: 1vh;
			padding: 0 0.5vh 2vh;
			box-sizing: border-box;
			position: relative;
			height: 14vh;

		}

		.loadmore {
			font-size: 1.2vh;
			color: #fff;
			margin-top: 1vh;
			cursor: pointer;
			width: 100%;
			text-align: center;

		}

		.one {
			width: 100%;

		}

		.two {
			width: 50%;
		}

		.mediaImg {
			height: 12vh;
			width: 100%;
			object-fit: cover;
		}

		.mediaTitle {
			color: #fff;
			font-size: 1.3vh;
		}

		.quanping {
			height: 1.6vh;
			width: 1.6vh;
			position: absolute;
			right: 0.5vh;
			top: 0;
			z-index: 20;
			cursor: pointer;
		}
	}

	.popBody {
		position: fixed;
		pointer-events: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.popImg {
			position: relative;
			width: 50vw;


			.media {
				height: 50vh;
				width: 50vw;
				object-fit: cover;
				vertical-align: middle;
			}

			.close {
				position: absolute;
				height: 4vh;
				width: 4vh;
				right: -4vh;
				top: -4vh;
				cursor: pointer;
			}
		}

		.popContent {
			padding: 1vh 1vh;
			background-color: #0C3270;
			width: 50vw;
			box-sizing: border-box;

			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 50%;
					display: flex;
					align-items: center;

					>img {
						height: 1.5vh;
						width: 1.5vh;
						margin-right: 1vh;
					}

					>div {
						line-height: 1.8;
						font-size: 1.2vh;
						color: #fff;
					}
				}
			}
		}
	}
</style>
