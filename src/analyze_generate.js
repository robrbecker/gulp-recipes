module.exports = function(gulp, options) {

    var desc = require('./desc');
    var plato = require('gulp-plato');
    var open = require('gulp-open');
    var path = require('path');
    var es = require('event-stream');
    var wait = require('gulp-wait');

    var taskname = 'analyze:generate';

    desc(taskname, 'Generate code complexity report');

    var fn = function() {
        var html = path.resolve(options.path.report, 'index.html');

        return gulp.src(options.glob.js, {
            cwd: options.path.src
        })
            .pipe(plato(options.path.report));
    };
    gulp.task(taskname, ['build'], fn);
};