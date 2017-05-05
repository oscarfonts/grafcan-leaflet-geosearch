var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
    context: entryPath,
    entry: './grafcanProvider.js',
    output: {
        path: outputPath,
        filename: 'grafcanProvider.js'
    },
    resolve: {
      extensions: [".js"]
    },
    externals: {
        "leaflet": "L" // Don't include Leaflet in webpack bundle
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
          }]
    },
    devtool: debug ? 'inline-source-map' : false,
    devServer: {
        contentBase: outputPath
    }
};

