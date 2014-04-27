module.exports = function(gulp, options) {

    var desc = require('./desc');

    var taskname = 'dist';

    desc(taskname, 'Create a distribution');

    var fn = function(done) {
        gulp.src('**/*.*', {
            base: options.path.build
        })
            .pipe(gulp.dest(options.path.dist));
        done();
    };
    gulp.task(taskname, ['clean', 'build'], fn);
};