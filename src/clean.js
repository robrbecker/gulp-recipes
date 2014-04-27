module.exports = function(gulp, options) {

    var desc = require('./desc');
    var fs = require('fs-extra');

    var taskname = 'clean';

    desc(taskname, 'Clean up the build directory');

    var fn = function(done) {
        fs.removeSync(options.path.build);
        done();
    };
    gulp.task(taskname, fn);
};