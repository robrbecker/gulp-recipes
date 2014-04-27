module.exports = function(gulp, options) {

    var desc = require('./desc');
    var tslint = require('gulp-tslint');

    var taskname = 'tslint';

    desc(taskname, 'Validate TS files with tslint');

    var fn = function(done) {
        return gulp.src(options.glob.ts, {
            cwd: options.path.src
        })
            .pipe(tslint())
            .pipe(tslint.report('verbose'));
    };
    gulp.task(taskname, fn);
};