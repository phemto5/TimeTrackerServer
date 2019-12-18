const path = require("path");

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
    extensions: [".tsx", ".ts", ".js"]
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
  externals: {
    // express: "express",
    // sequelize: "sequelize"
  }
};
