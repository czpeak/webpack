const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // webpack 自动重新编译修改后的模块,缺点是，为了看到修改后的实际效果，你需要刷新浏览器
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin('dist'), // 每次执行 npm run build 都会先删除原来的dist文件夹
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};