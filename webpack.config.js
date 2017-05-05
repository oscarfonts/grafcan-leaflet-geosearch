var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
    context: entryPath,
    entry: './index.js',
    output: {
        path: outputPath,
        filename: 'grafcan-leaflet-geosearch.js',
        library: 'GeoSearch'
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
                    presets: ['es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            }]
          }]
    },
    devtool: debug ? 'inline-source-map' : false,
    devServer: {
        contentBase: outputPath
    }
};
