const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "js/bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.scss|\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:  [{
            loader: 'file-loader',
            options: {
              name: 'images/[contenthash].[ext]'
            }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: "all" }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ]
};