module.exports = function(gulp, options) {

    var desc = require('./desc');
    var jsdoc = require('gulp-jsdoc');

    var taskname = 'jsdoc:generate';

    desc(taskname, 'Generate documentation from JSdoc');

    var fn = function() {

        return gulp.src(options.glob.js, {
            cwd: options.path.src
        })
            .pipe(jsdoc.parser())
            .pipe(jsdoc.generator(options.path.docs));
    };
    gulp.task(taskname, fn);
};