const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    'app.bundle':'./src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js',
    library: "iot",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};
