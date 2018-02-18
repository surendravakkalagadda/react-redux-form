const path= require('path')
const webpack = require('webpack')

module.exports= {
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path: path.join(__dirname,'dist')
  },
  module : {
      rules: [
          {
            test:/\.js$/,
            exclude:/(node_modules)/,
            use : {
              loader: 'babel-loader',
              options: {
                presets: ['env','react']
              }
            }
          },
          {
            test:/\.css$/,
            use :[
              {loader: 'style-loader'},
              {loader: 'css-loader'}
            ]
          }
      ]
  }
}
