/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: APP应用程序入口文件
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */

import Vue from 'vue';
import router from './routes/router';
import VueScroller from 'vue-scroller';
import App from 'components/app.vue';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';


// 将 axios 挂载到 vue 原型中, 方便组件直接访问
Vue.prototype.$axios = axios;

Vue.use(VueAwesomeSwiper);
Vue.use(VueScroller);

// 实例化 vue 将 `router` 挂载到 vue 实例
const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
