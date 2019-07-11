const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    'app.bundle':'./src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: "iot",
    libraryTarget: "umd"
  },
  devServer: {
    proxy: {
      '/api': 'http://192.168.119.133:8001'
    }
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
      inject: "head",
      template: 'src/index.html'
    }),
    // new CleanWebpackPlugin(),
  ]
};
