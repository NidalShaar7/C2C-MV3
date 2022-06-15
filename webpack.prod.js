const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    "output/apps/serviceworker": "./src/apps/serviceworkers/serviceworker.js",
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./manifest.json",
        to: "./output/manifest.json",
        force: true,
      },
      {
        from: "./src/libs/rainbow-sdk.min.js",
        to: "./output/libs/rainbow-sdk.min.js",
      },
      {
        from: "./src/libs/vendors-sdk.min.js",
        to: "./output/libs/vendors-sdk.min.js",
      },
    ]),
  ],
});
