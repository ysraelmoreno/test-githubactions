const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function getConfigFiles(env) {
  return require(`./build-utils/webpack.${env}`);
}

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return merge(
    {
      mode,
      entry: "./src/index.js",
      devServer: {
        hot: true,
        open: true,
      },
      output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.sa?css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    getConfigFiles(mode)
  );
};
