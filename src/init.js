#!/usr/bin/env node

var fs = require('fs-extra');
var path = require('path');

function copy(src, target) {
    console.log('Creating initial ' + target);
    fs.copySync(src, target);
}

copy('node_modules/gulp-recipes/gulpconfig.json', path.resolve(process.cwd(), 'gulpconfig.json'));
copy('node_modules/gulp-recipes/sample-gulpfile.js', path.resolve(process.cwd(), 'gulpfile.js'));