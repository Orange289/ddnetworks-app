const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;
const PATHS = {
  src: path.join(__dirname, './src'), //absolute path to RepoDir/src
  dist: path.join(__dirname, './dist'), //absolute path to RepoDir/dist
  assets: path.join(__dirname, './src/assets')
};

module.exports = {
  entry: PATHS.src + "/index.js",
  output: {
    path: PATHS.dist,
    filename: "index.js"
  },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/,
        use: [
          env !== "production"
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: PATHS.src + "/helpers/*.scss"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          env !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "/fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: PATHS.assets + '/images',
        to: './images'
      },
      {
        from: PATHS.assets + '/icons',
        to: './icons'
      },
      {
        from: PATHS.assets + '/video',
        to: './video'
      },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[chunkhash].css",
      chunkFilename: "css/[id].[chunkhash].css"
    }),
    new CleanWebpackPlugin()
  ]
};
