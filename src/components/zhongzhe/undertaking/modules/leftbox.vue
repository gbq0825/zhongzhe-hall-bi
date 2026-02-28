<template>
    <div class="myContent">
        <div class="myBody">
            <Title>
                <span slot="title">消费电子事业部销售收入（万元）</span>
            </Title>
            <div class="contentBody">
                <div class="titleHonor">
                    <div style="width: 50%;text-align: left;padding-left: 10px;">公司</div>
                    <div style="width: 25%;">年度目标</div>
                    <div style="width: 25%;">销售额</div>
                </div>
                <vue-seamless-scroll style="height: 38vh;" class="seamless-warp-scroll2" :data="dataList"
                    :class-option="classOption">
                    <ul>
                        <li v-for="(item, index) in dataList" :key="index">
                            <span style="width: 50%;">{{ item.name }}</span>
                            <span style="width: 25%;">{{ item.goal }}</span>
                            <span style="width: 25%;">{{ item.sales }}</span>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
            <Title>
                <span slot="title">销售指标达成率</span>
            </Title>
            <div class="rate">
                <div class="pieChart" id="undertaking-left1"></div>
                <!-- <img src="../../../../assets/img/yibiao1.png" class="yibiao" /> -->
            </div>
        </div>
    </div>
</template>

<script>
import Title from "../../Title.vue"
import {
    undertakingCircle
} from './getOption';
export default {
    components: {
        Title
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
            dataList: [
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
                {
                    name: '宁波祥路汽车部件股份有限公司',
                    goal: '1000万元',
                    sales: '1000万元',
                },
            ],
            data1: [{
                name: '销售指标达成率',
                value: 25.8
            }],
        };
    },
    created() {


    },

    mounted() {
        this.getYibiao1()
    },
    methods: {
        getYibiao1() {
            let chartDom = document.getElementById('undertaking-left1');
            this.$echarts.init(chartDom).dispose()
            let myChart = this.$echarts.init(chartDom, 'dark');
            // let option = jyzx_rcxy(this.data1, '#70DEEE')
			let option = undertakingCircle(this.data1)
            myChart.setOption(option);
        },
    },


}
</script>

<style lang="less" scoped>
@import "../../styles.less";

.myContent {
    width: 22vw;
    margin-left: 1vw;
	pointer-events: auto;
}

.myBody {
    
    .contentBody {
        height: 18vh;
        overflow: hidden;
        margin-bottom: 2vh;

        .titleHonor {
            background: #023164;
            opacity: 0.4;
            display: flex;
            width: 100%;

            div {
				padding: 1vh 0;
                font-size: 1.6vh;
                font-weight: 500;
                color: #FFFFFF;
                text-align: center;
            }
        }
    }

    .seamless-warp-scroll2 {
        overflow: hidden;
    }

    .seamless-warp-scroll2 ul li {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1vh 0;
        background: linear-gradient(90deg, rgba(7, 10, 22, 0) 0%, rgba(13, 57, 98, 0.3) 46%, rgba(13, 57, 98, 0) 100%);
    }

    .seamless-warp-scroll2 ul li span {
        display: flex;
        justify-content: center;
        color: #ffffff;
        font-size: 1.4vh;
    }

    .seamless-warp-scroll2 ul li::after {
        position: absolute;
        height: 1px;
        width: 100%;
        content: "";
        bottom: 0;
        background: linear-gradient(135deg,
                rgba(238, 238, 238, 0) 0%,
                #45a5c9 53%,
                rgba(255, 255, 255, 0) 100%);
    }


    .rate {
		padding-top: 2vh;
        position: relative;

        .yibiao {
            // height: 68%;
            // width: 51%;
            // position: absolute;
            // left: 50%;
            // top: 8%;
            // transform: translateX(-50%);
			height: 16.2vh;
			width: 21.6vh;
			position: absolute;
			left: 50%;
			top: 8.8%;
			transform: translateX(-50%);
        }

   
    }

    .pieChart {
        height: 20vh;
		width: 100%;
    }
}
</style>
