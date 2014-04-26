module.exports = function dist(gulp, options) {

    var desc = require('./desc');

    var taskname = arguments.callee.name;

    desc(taskname, 'Create a distribution');

    var fn = function(done) {
        gulp.src('**/*.*', {
            base: options.path.build
        })
            .pipe(gulp.dest(options.path.dist));
        done();
    }
    gulp.task(taskname, ['clean', 'build'], fn);
}