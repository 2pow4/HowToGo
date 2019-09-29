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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }

}