/**
 * Created by HH on 2017/3/3.
 */
var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/components/app.js',
        vendors:['react','react-dom']

    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '',
        // filename: 'dev.js'
        filename: '[name]-[chunkhash:5].js',
        chunkFilename: '[name].js'  //路由对应文件
    },

    plugins: [
      new ExtractTextPlugin('style-[contenthash:5].css'),
      // new webpack.optimize.OccurrenceOrderPlugin(),  //已被默认加载
      new webpack.optimize.CommonsChunkPlugin({
        names:'vendors',
        filename: 'vendors-[chunkhash:5].js',  
        minChunks:Infinity
      }),
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
    //   new CopyWebpackPlugin([
    //   { from: './index.html', to: 'index.html' }
    // ]),
      new HtmlWebpackPlugin({
        template: __dirname + "/index.html"
      }),
      new WebpackMd5Hash()
    ],



    module: {
        loaders: [{
        //     test: /\.css$/,
        //     loaders: ['style-loader', 'css-loader']
        // }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            // loader: ['babel-loader','eslint-loader'],
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.(scss|css)/,
            // loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version","IE 8"]}!sass-loader?outputStyle=expanded'
            use: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:["css-loader","autoprefixer-loader?{browsers:['last 2 version','IE 8']}","sass-loader"],
                publicPath: ""   //css需要的资源的路径
            })
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!resolve-url!'
        },{
            // test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=5000&name=[path][name].[ext]'
        }]
    }
}
