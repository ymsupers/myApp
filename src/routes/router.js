/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: vue路由配置
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import welcome from 'components/welcome.vue';
import home from 'components/home.vue';
import NotFoundComponent from 'components/__404.vue';

import promote from 'components/promote.vue';
import hot from 'components/hot.vue';
import region from 'components/region.vue';
import video from 'components/video.vue';
import society from 'components/society.vue';
import disport from 'components/disport.vue';
import technology from 'components/technology.vue';

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
		component: home,
		redirect: '/promote',
        children: [
			{
				path: '/promote',
				component: promote
			},
			{
				path: '/hot',
				component: hot
			},
			{
				path: '/region',
				component: region
			},
			{
				path: '/video',
				component: video
			},
			{
				path: '/society',
				component: society
			},
			{
				path: '/disport',
				component: disport
			},
			{
				path: '/technology',
				component: technology
			}
		]
	}
]

// 安装路由
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'hash',
	routes
});

// 定义进度条配置
NProgress.configure({
	template: `
		<div class="bar" role="bar" style="background:#fff;"></div>
		<div class="spinner" role="spinner">
			<div class="spinner-icon"></div>
		</div>`,
	showSpinner: false,
	speed: 500,
	minimum: 0.4
});


// 定义路由钩子
router.beforeEach((to, form, next) =>{
    to.fullPath !== '/' && NProgress.start();
    next();
});

router.afterEach((to, form, next) => {
	to.fullPath !== '/' && NProgress.done(true);
});

export default router;

