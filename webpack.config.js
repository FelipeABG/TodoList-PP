const path = require("path");
const hwp = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },

  plugins: [
    new hwp({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
