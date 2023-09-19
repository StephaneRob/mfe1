const path = require("path");
const moduleFederationPlugin = require("./module-federation");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist/client"),
    port: 3005,
    historyApiFallback: { index: "/", disableDotRule: true },
    client: {
      overlay: false,
    },
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
    moduleFederationPlugin.client,
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new WebpackManifestPlugin(),
  ],
};
