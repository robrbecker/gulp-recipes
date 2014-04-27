module.exports = function(gulp, options) {

    var desc = require('./desc');
    var jshint = require('gulp-jshint');

    var taskname = 'jshint';

    desc(taskname, 'Validate JS files with jshint');

    var fn = function() {
        return gulp.src(options.glob.js, {
            cwd: options.path.src
        })
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
        // done();
    };
    gulp.task(taskname, fn);
};