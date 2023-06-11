const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const appConfig = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    // Other plugins...
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    historyApiFallback: true,
    hot: true
  }
};

module.exports = appConfig;
