const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "superButton",
      filename: "remoteEntry.js",
      exposes: {
        "./SuperButton": "./src/SuperButton",
      },
      shared: {},
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new WebpackManifestPlugin(),
  ],
};
