const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  stats: "verbose",
  devServer: {
    port: 8080,
  },
  plugins: [new Dotenv({ path: "./prod.env" })],
});
