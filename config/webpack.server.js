const path = require("path");
const moduleFederationPlugin = require("./module-federation");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: false,
  devServer: {
    static: path.join(__dirname, "dist/server"),
    port: 3006,
  },
  output: {
    publicPath: "auto",
    libraryTarget: "commonjs-module",
    filename: "[name].js",
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
    moduleFederationPlugin.server,
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new WebpackManifestPlugin(),
  ],
};
