var desc = require('./desc');

module.exports = function watch(gulp, options) {

    var taskname = arguments.callee.name;

    desc(taskname, 'Watch source files for changes and rebuild');

    var fn = function(done) {
        gulp.watch(options.glob.src, ['build']);
        done();
    }
    gulp.task(taskname, fn);
}