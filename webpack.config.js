// webpack.config.js
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['./src/index'],
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],
  module: {
    loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          /*query:{presets: ['es2015']}*/
        },
        {
          test: /\.(png|jpg)$/,
          loader:'url-loader?limit=8192&name=images/[name].[ext]'
        }

    ]
  },
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
}