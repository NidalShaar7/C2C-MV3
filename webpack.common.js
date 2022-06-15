const webpack = require("webpack");

const config = {
  output: {
    path: __dirname,
    filename: "[name].min.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /rainbow-sdk.min.js/],
        use: ["babel-loader"],
      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss", ".json"],
  },
};

module.exports = config;
