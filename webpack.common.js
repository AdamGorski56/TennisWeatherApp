const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.html$/i,
        use: ["html-loader"]
      },
      {
      test: /\.(png|jpe?g|gif|svg|ttf)$/i,
      use: [
        {
          loader: 'file-loader',
          options:{
      
            name:"[name].[contenthash].[ext]",
            outputPath: "imgs&fonts"
          }
        },
      ],
    },
      
    ]
  }
};
