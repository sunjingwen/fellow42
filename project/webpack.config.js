const path = require('path');
const HtmlPlhgin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  // 开发环境配置： production:生产环境（线上）development：开发环境（开发）
  mode: 'development',
  // 入口文件配置
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  // 出口文件
  output: {
    // 绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // 配置图片路径
    publicPath: 'http://localhost:8083/',
  },
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8083,
    // open:true,
  },
  plugins: [
    /* 处理html文件的打包 */
    new HtmlPlhgin({
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        // collapseWhitespace:true,
      },
      hash: true,
    }),
    // 每次构建重先删除dist再重新打包dist文件夹
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
  ],
  // 配置loader
  module: {
    rules: [
      {
        /* 针对css处理规则 */
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }, {
        /* 针对图片文件的处理规则 */
        test: /\.png|jpg|gif$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500,
              outputPath: 'images/',
              esModule: false
            }
          }
        ]
      }, {
        /* 对html文件的处理 */
        test: /\.htm|html$/i,
        loader: 'html-withimg-loader',
      }, {
        /* 针对sass处理规则 */
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }, {
        /* 针对js文件的处理（es6 => es5） */
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }],
        // 不把node_modules中的文件进行转换
        exclude: /node_modules/
      }
    ]
  }
}