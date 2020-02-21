const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: { mainserver: "./src/server.ts" },
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  // // Not page devServer won't work ?
  // devServer:{
  //   contentBase: path.join(__dirname,'dist'),
  //   port:8081
  // },
  externals: [nodeExternals()]
};
