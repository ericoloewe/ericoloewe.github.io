/**
 * Gulp file
 */
require('babel-core/register')
require('babel-polyfill')

const Build = require("./build/build");

Build.start()
