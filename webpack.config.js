/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: webpack打包配置文件
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */

module.exports = function () {
	return require(`./dist/webpack.${process.env.NODE_ENV}.js`);
}
