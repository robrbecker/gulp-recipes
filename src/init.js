#!/usr/bin/env node

var fs = require('fs-extra');
var path = require('path');

console.log('Initializing gulp build. CWD: ' + process.cwd());

// fs.createReadStream('node_modules/gulp-recipes/gulpconfig.json')
//     .pipe(fs.createWriteStream(path.resolve(process.cwd(), 'gulpconfig.json')));

// fs.createReadStream('node_modules/gulp-recipes/sample-gulpfile.js')
//     .pipe(fs.createWriteStream(path.resolve(process.cwd(), 'gulpfile.js')));