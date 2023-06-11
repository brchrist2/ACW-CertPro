const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootConfig = {
  mode: 'development'
};

const appConfig = {
  ...rootConfig,
  entry: './src/main.js',
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
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    // Other plugins...
  ]
};

module.exports = appConfig;
