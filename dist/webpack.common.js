/**
 *	author: 杨益美
 * 	email: wsmis@vip.qq.com
 *  description: 公用配置文件
 *  date: 2017-08-28
 *  (c) Copyright 2017 杨益美. All Rights Reserved. 
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let cssExtractTextPlugin = ExtractTextPlugin.extract({
	use: 'css-loader',
	fallback: 'style-loader'
});

let sassExtractTextPlugin = ExtractTextPlugin.extract({
	use: 'sass-loader',
	fallback: 'style-loader'
});

let lessExtractTextPlugin = ExtractTextPlugin.extract({
	use: 'less-loader',
	fallback: 'style-loader'
})

module.exports = {
	// 配置应用程序入口文件
	entry: {
		app: path.join(__dirname, '..', 'src/index.js')
	},
	// 配置应用编译输出文件
	output: {
		path: path.join(__dirname, 'asset/'),
		filename: '[name].bundle.js',
		publicPath: ''
	},
	// 
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {	
						css: ExtractTextPlugin.extract({
							use: ['css-loader'],
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.css$/,
				use: cssExtractTextPlugin
			},
			{
				test: /\.s[ac]ss$/,
				use: sassExtractTextPlugin
			},
			{
				test: /\.less$/,
				use: lessExtractTextPlugin
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000
					}
				}
			}
		]
	}
};

