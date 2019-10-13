const path = require('path')

module.exports = {
  entry: "./src/jsx/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(`${__dirname}/scripts`),
    publicPath: '/scripts'
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
          ]
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
  

}