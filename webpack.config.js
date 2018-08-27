const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const path = require("path");

module.exports = {
  //入口
  entry: "./src/main.js",
  mode: "development",
  //loader
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(ttf|woff|eot|svg|jpg|gif|png)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    },
    extensions: [".vue", ".js", ".css", "*"]
  },
  devServer: {
    overlay: true,
    open: true
  },
  //plugins
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./template.html"
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
