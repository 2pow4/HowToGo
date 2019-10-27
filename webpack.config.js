const path = require('path')

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(`${__dirname}/public/scripts`),
    publicPath: '/'
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
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: '/scripts/',
          name: '[name].[ext]',
        },
      }, 
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }

}