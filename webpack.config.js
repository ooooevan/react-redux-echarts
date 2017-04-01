/**
 * Created by HH on 2017/3/3.
 */
var debug=process.env.NODE_ENV !=="production";
var path = require('path');
var webpack = require('webpack');

var proxy = require('http-proxy-middleware');
const context = ['/*', '/allsellers/*'];
module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/components/app.js',
        vendors:['react','react-dom']

    },
    output: {
        path: path.join(__dirname, 'dist'),
        // publicPath: '/dev/',
        // filename: 'dev.js'
        filename: '[name].js',      //①
        chunkFilename: '[name].js'    //②
    },
    //  devServer: {
    //     historyApiFallback: true,
    //     contentBase: "./",
    //     quiet: false, //控制台中不输出打包的信息
    //     noInfo: false,
    //     hot: true,       //热替换(MHR)、即改变部分，不刷新
    //     inline: true,   //刷新页面            -->和上面都为true，则优先hot
    //     lazy: false,
    //     progress: true, //显示打包的进度
    //     watchOptions: {
    //         aggregateTimeout: 300
    //     },
    //     port: '8080',
    //      //设置代理只要配置这个参数就可以了
    //     proxy: [
    //         {
    //             context:context,
    //             target: 'http://localhost:3003',   //api要访问的域名
    //             secure: false
    //         }
    //     ]
    // },


    plugins:  [

      new webpack.optimize.CommonsChunkPlugin({
        // names:['react','react-dom'],
        // minChunks:Infinity
        names:'vendors',
        filename: 'vendors.js',  
        minChunks:Infinity
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output:{
          comments:false,        //去掉所以注释
        },
        compress:{
          warnings:false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
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
                presets: ['es2015', 'react','stage-0']
            }
        }, {
            test: /\.(scss|css)/,
            loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            //loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!resolve-url!'
        },{
            // test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=5000&name=[path][name].[ext]'
        }]
    }
}
