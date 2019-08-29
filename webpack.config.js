const path = require('path')

module.exports = {
 entry: ['lodash', './index.js'],
 output: {
    path: path.join(__dirname, './'),
    filename: 'index.bundle.js'
 },
 mode: process.env.NODE_ENV,
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /(node_modules)/,
       use: {
         loader: 'babel-loader'
       }
     }
   ]
   }
}
