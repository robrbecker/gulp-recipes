module.exports = function(gulp, options) {

    var desc = require('./desc');
    var open = require('gulp-open');
    var path = require('path');

    var taskname = 'jsdoc';

    desc(taskname, 'View JSdoc');

    var fn = function() {
        var html = path.resolve(options.path.docs, 'index.html');
        return gulp.src(html).pipe(open(html));
    };
    gulp.task(taskname, ['jsdoc:generate'], fn);
};