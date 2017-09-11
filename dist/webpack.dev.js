/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: 开发者模式下配置文件
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */
let webpack = require('webpack');
let Merge = require('webpack-merge');
let path = require('path');
let WebpackCommonJs = require('./webpack.common');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = Merge(WebpackCommonJs, {
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'components': path.resolve(__dirname, '..', 'src/components/'),
			'css': path.resolve(__dirname, '..', 'resource/static/css'),
			'images': path.resolve(__dirname, '..', 'resource/static/images/'),
			'js': path.resolve(__dirname, '..', 'resource/static/js/')
		}
	},
	plugins: [
		// 使用 webpack 自带的 `UglifyJsPlugin` 来压缩代码只针对JS有效果
		new webpack.optimize.UglifyJsPlugin(),
		// 每次打包之前先清空之前过期的文件
		new CleanWebpackPlugin(['./assets']),
		// 使用 `html-webpack-plugin` 来生成 html 文件
		new HtmlWebpackPlugin({
			inject: false,
			title: 'My App Application',
			template: require('html-webpack-template'),
			// 生成文件之后保存路径
			filename: path.resolve(__dirname, '..', 'src/views/index.html'),
			appMountId: 'app',
			minify: {
				collapseWhitespace: true
			},
			lang: 'en-US',
			mobile: true,
			// 配置后端API请求地址
			window: {
				env: {
					apiHost: 'http://127.0.0.1:7000/api/'
				}
			},
			hash: true,
			links: [
				'https://fonts.googleapis.com/icon?family=Material+Icons'
			]
		}),
		// 独立出css文件
		new ExtractTextPlugin('css/[name].min.css', {
			
		}),
		// css打包压缩
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions:{ discardComments: {removeAll: true} },
			canPrint: true
		}),
		// 切换到生产模式
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
});

