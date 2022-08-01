// build_utils/webpack.development.js

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
});
