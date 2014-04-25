var desc = require('./desc');
var fs = require('fs-extra');

module.exports = function clean(gulp, options) {

    var taskname = arguments.callee.name;

    desc(taskname, 'Clean up the build directory');

    var fn = function(done) {
        fs.removeSync(options.path.build);
        done();
    }
    gulp.task(taskname, fn);
}