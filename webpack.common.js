const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  entry: {
    app: "./index.tsx", // Indica aqui el punto de entrada de la aplicacion
    appStyles: ["./styles/mystyles.scss"],
    appBootstrapStyles: "../node_modules/bootstrap/dist/css/bootstrap.css",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/, // Tratamiento de los JSX para babel
        test: /\.tsx?$/, // Tratamiento de los JSX para babel
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        //use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            //options: { modules: true },
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                localIdentHashSalt: "my-custom-hash",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      scriptLoading: "blocking",
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
  },
};
