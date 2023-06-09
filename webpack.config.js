const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootConfig = {
  mode: 'development',
  optimization: {
    usedExports: true, // tells webpack to tree-shake
  },
  devtool: 'eval-source-map',
};

const appConfig = {
  ...rootConfig,
  entry: './src/App.vue',
  output: {
    path: path.resolve(__dirname, 'dist/'),
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
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
};

module.exports = appConfig;
