const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  //入口
  entry: './src/index.js',
  //出口
  output: {
    path: path.join(__dirname, "dist"),
    filename: "v-qrcode.js"
  },
  //loader
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // vue-loader 升级到了15.x
        // exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      }
    ]
  },
  resolve: {
    extensions: [".vue", ".js"]
  },
  //plugins
  plugins: [
    new CleanWebpackPlugin("dist"),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
