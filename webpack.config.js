const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const rootConfig = {
  mode: 'development',
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
    new VueLoaderPlugin(),
    // Other plugins...
  ],
};

module.exports = appConfig;
