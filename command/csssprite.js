'use strict';
var async = require('async');
var connect = require('connect');
var favicon = require('serve-favicon');
var _static = require('serve-static');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require('webpack');
var path = require('path');
var resolve = path.resolve;
var fs = require('fs');
var vsprite = require('visual-sprite');

var visualSprite = function(program) {
  var webpackDevConf = require(path.join(process.cwd(), './webpack-dev.config'));
  var options = webpackDevConf.visualSprite || {};
  // console.log(options);
  vsprite(options);
  // console.log(extend);
};


module.exports = function(program) {
	visualSprite(program);
};
