// 載入轉存 css 檔案的套件
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/img'),
    },
  },
  entry: {
    main: './src/js/main.js',
    slider: './src/js/slider.js',
    header: './src/js/header.js',
    animation: './src/js/animation.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  })],
};