module.exports = function(gulp, options) {

    var desc = require('./desc');

    var taskname = 'dist';

    desc(taskname, 'Create a distribution');

    var fn = function() {
        return gulp.src('**/*.*', {
            cwd: options.path.build
        })
            .pipe(gulp.dest(options.path.dist));
    };
    gulp.task(taskname, ['clean', 'build'], fn);
};