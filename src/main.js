import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import VueRouter from "vue-router";
import {
	routes
} from "./router";
import "animate.css";
Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: "hash",
});

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import Viser from "viser-vue";
import * as echarts from "echarts";
import 'echarts-liquidfill'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

// Vue.use(Viser);
Vue.prototype.$http = axios;


// axios.defaults.baseURL='http://172.16.1.73:8090'
axios.defaults.baseURL = process.env.VUE_APP_WEB_URL || ''

// 列表无缝滚动
import scroll from "vue-seamless-scroll";
Vue.use(scroll);

import moment from "moment";
Vue.use(moment);
moment.locale('zh-cn')

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
