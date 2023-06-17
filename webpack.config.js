const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const appConfig = {
  mode: 'development',
  entry: {
    bundle: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // Other plugins...
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
};

module.exports = appConfig;