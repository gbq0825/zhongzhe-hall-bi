<template>
    <div class="myContent">
        <div class="myBody">
            <div class="title">
                <Title>
                    <span slot="title">监控中心</span>
                </Title>
            </div>
            <div class="child centerSecond">
                <div class="titleGroup">
                    <!-- <vue-seamless-scroll class="titleGroup" :class-option="classOption" :data="titleList"> -->
                    <ul>
                        <li v-for="(item, index) in titleList" :key="index" class="titleItem"
                            :class="{ titleItem_Active: index == titleIndex }" @click="titleClick(index)">
                            {{ item }}
                        </li>
                    </ul>

                    <!-- </vue-seamless-scroll> -->

                </div>
                <div class="contentGroup" v-if="false">
                    <div class="contentView">
                        <div class="monitor">
                            <div class="bottom">
                                生产车间监控2号位
                            </div>
                            <img class="fxIcon" src="../../../../assets/img/fxIcon.png" alt="">
                        </div>

                        <div class="monitor1">
                            <div class="bottom">
                                生产车间监控2号位
                            </div>
                            <img class="fxIcon" src="../../../../assets/img/fxIcon.png" alt="">
                        </div>
                        <div class="unFlex">
                            <div v-for="(item,index) in 10" :key="index" class="monitor2">
                                <div class="bottom">
                                    生产车间监控2号位
                                </div>
                                <img class="fxIcon" src="../../../../assets/img/fxIcon.png" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="unFlex">
                        <div v-for="(item,index) in 10" :key="index" class="monitor2">
                            <div class="bottom">
                                生产车间监控2号位
                            </div>
                            <img class="fxIcon" src="../../../../assets/img/fxIcon.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="contentRight">
                    <BoxView></BoxView>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Title from "../../Title.vue"
import BoxView from "./boxView.vue"

// var titleTimer
export default {
    components: {
        Title,
        BoxView
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
            titleIndex: 0,
            code: null,
            titleList: [
                '中哲控股集团有限公司',
            ],
        };
    },
    created() {
    },
    mounted() {
        // titleTimer = setInterval(() => {
        // 	if (this.titleIndex == this.titleList.length - 1) {
        // 		this.titleIndex = 0
        // 	} else {
        // 		this.titleIndex++
        // 	}
        // }, 3000);
    },
    beforeDestroy() {
        // clearInterval(titleTimer)
    },
    methods: {
        titleClick(index) {
            // clearInterval(titleTimer)
            this.titleIndex = index

            // titleTimer = setInterval(() => {
            // 	if (this.titleIndex == this.titleList.length - 1) {
            // 		this.titleIndex = 0
            // 	} else {
            // 		this.titleIndex++
            // 	}
            // }, 3000);
        },
    },


}
</script>

<style lang="less" scoped>
	@import "../../styles.less";

	.myContent {
		width: calc(100vw - 40px);
		margin-top: 1vh;
		margin-left: 1vw;
		pointer-events: auto;
	}

	.myBody {
		height: 31vh;
	}

	.centerSecond {
		display: flex;
		padding: 0;
		margin-top: -3vh;
		position: relative;

		.date {
			margin-right: 10px;
			position: absolute;
			top: -35px;
			left: 180px;

			img {
				position: absolute;
				right: 12px;
				top: 7px;
				width: 17px;
				height: 15px;
			}


			.picker {
				width: 86px;
				height: 31px;
				background: rgba(0, 0, 0, 0) !important;
			}


		}

		.titleGroup {
			height: 22vh;
			width: 20vw;
			font-size: 1.4vh;
			color: #FFFFFF;
			// overflow: hidden;
			overflow-y: auto;

			

			.titleItem {
				width: 100%;
				opacity: 0.5;
				text-align: center;
				padding: 0.5vh 0;
				background: url("../../../../assets/img/tab.png") no-repeat;
				background-size: auto 100%;
				cursor: pointer;
				margin-bottom: 1vh;
				margin-left: 1vh;
			}


			.titleItem_Active {
				background: url("../../../../assets/img/tab1.png") no-repeat;
				background-size: 100% 100%;
				opacity: 1;
				font-weight: bold;
			}
		}

		.contentGroup {
			margin-left: 2vh;
			flex: 1;
			height: 20vh;
			overflow: scroll;
		}
		.contentRight{
			margin-left: 2vh;
			flex: 1;
			height: 20vh;
		} 

		

		.contentView {
			width: 100%;

			display: flex;

			.leftMinitor {
				float: left;
			}

			.monitor {

				width: 20vw;
				height: 20vh;
				background: url('../../../../assets/img/mediaImg.png') no-repeat;
				background-size: 100% 100%;
				position: relative;

				.bottom {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 2vh;
					background: rgba(0, 0, 0, 0.8);
					font-size: 1.4vh;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 2;


				}
			}

			.monitor1 {
				width: 10vw;
				height: 20vh;
				background: url('../../../../assets/img/text.jpg') no-repeat;
				background-size: 100% 100%;
				position: relative;
				margin-left: 1vh;

				.bottom {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					background: rgba(0, 0, 0, 0.8);
					font-size: 1.4vh;
					font-weight: 500;
					color: #FFFFFF;


				}


			}


		}

		.unFlex {
			flex: 1;
			display: flex;
			flex-wrap: wrap;

			.monitor2 {
				width: 8.4vw;
				height: 9.4vh;
				background: url('../../../../assets/img/mediaImg.png') no-repeat;
				background-size: 100% 100%;
				position: relative;
				margin-left: 1vh;
				margin-bottom: 1.5vh;

				.bottom {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					background: rgba(0, 0, 0, 0.8);
					font-size: 1.4vh;
					font-weight: 500;
					color: #FFFFFF;


				}


			}
		}

	}

	.fxIcon {
		width: 1.6vh;
		position: absolute;
		top: 0.5vh;
		right: 0.5vh;
	}

	.centerSecond {
		.el-input__inner {
			width: 86px;
			height: 31px !important;
			line-height: 31px !important;
			font-size: 16px !important;
			font-weight: 600 !important;
			padding-left: 12px !important;
			background: rgba(0, 0, 0, 0) !important;
			border-radius: 0 !important;
			color: #2dcdff !important;
			border: 0px solid #2dcdff !important;
		}

		.el-input__prefix {
			display: none;
		}
	}
	
	
</style>