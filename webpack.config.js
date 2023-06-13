const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { VueLoaderPlugin } = require('vue-loader');

const rootConfig = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    watchFiles: ['src/App.vue', 'src/main.js'],
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    open: true
  },
};

const appConfig = {
  ...rootConfig,
  entry: {
    bundle: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
    // Other plugins...
  ],
};

module.exports = appConfig;
