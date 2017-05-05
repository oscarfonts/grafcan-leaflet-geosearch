var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/leaflet/dist/leaflet.js', // Leaflet not included in webpack bundle, but needed in testing environment
      'test/**/*Spec.js'
    ],
    preprocessors: {
      'test/**/*Spec.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: process.env.TRAVIS ? ['PhantomJS'] : ['Chrome'],
    singleRun: process.env.TRAVIS ? true : false,
    concurrency: Infinity
  })
};
