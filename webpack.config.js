const path = require('path');
 
module.exports = {
    mode : "development",
  entry: ["@babel/polyfill", "./search.js", "./search.css"],
  target: ['web','es5'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};