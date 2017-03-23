/**
 * Created by HH on 2017/3/3.
 */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: './src/components/app.js',
        vendors:['react','react-dom']

    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        // filename: 'dev.js'
        filename: '[name].bundle.js'
    },
    //plugins: [
    //    //new webpack.HotModuleReplacementPlugin()
    //    //提取公共部分资源
    //    new webpack.optimize.CommonsChunkPlugin({
    //        // 与 entry 中的 vendors 对应
    //        name: 'vendors',
    //        // 输出的公共资源名称
    //        filename: 'common.bundle.js',
    //        // 对所有entry实行这个规则
    //        minChunks: Infinity
    //    })
    //],

    plugins: [
        // new ExtractTextPlugin('[name].css'),
      new webpack.optimize.CommonsChunkPlugin({
        names:'vendors',
        filename: 'vendors.[chunkhash:5].js',  
        minChunks:Infinity
      }),
      // new ExtractTextPlugin('[name].css'),
      new webpack.optimize.UglifyJsPlugin({
        output:{
          comments:false,        //去掉所以注释
        },
        compress:{
          warnings:false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
      }),
      new CopyWebpackPlugin([
      { from: './index.html', to: 'index.html' }
    ])
    ],
      // devtool:'source-map',



    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            // loader: ['babel-loader','eslint-loader'],
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","IE 8"]}!sass-loader?outputStyle=expanded'
            // loader: ExtractTextPlugin.extract("style!css!sass")
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!resolve-url!'
        },{
            // test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=5000&name=[path][name].[ext]'
        }]
    }
}
