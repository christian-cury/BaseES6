const path = require('path')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  mode: 'production',
  entry: {
    server: [path.resolve(__dirname, './bin/main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  externals: nodeModules
}
