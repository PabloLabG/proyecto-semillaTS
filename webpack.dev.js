const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 9090,
  },
  plugins: [new Dotenv({ path: "./dev.env" })],
});
