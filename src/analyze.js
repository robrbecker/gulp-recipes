module.exports = function(gulp, options) {

    var desc = require('./desc');
    var open = require('gulp-open');
    var path = require('path');

    var taskname = 'analyze';

    desc(taskname, 'Generate code complexity report');

    var fn = function() {
        var html = path.resolve(options.path.report, 'index.html');

        return gulp.src(html)
            .pipe(open(html));
    };
    gulp.task(taskname, ['analyze:generate'], fn);
};