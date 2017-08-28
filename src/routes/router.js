/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: vue路由配置
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import welcome from 'components/welcome.vue';
import home from 'components/home.vue';
import NotFoundComponent from 'components/__404.vue';

let routes = [
	{
		path: '*',
		component: NotFoundComponent
	},
	{
		path: '/',
		component: welcome
	},
	{
		path: '/home',
		component: home
	}
]

// 安装路由
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
	routes
});

export default router;

