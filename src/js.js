module.exports = function(gulp, options) {
    var desc = require('./desc');
    var fs = require('fs');
    var changed = require('gulp-changed');

    // use the function name as the task name, or you can change it to what you like
    var taskname = 'js';

    desc(taskname, 'Copy JS files to ' + options.path.build_src);

    var fn = function(done) {

        if (!fs.existsSync(options.path.src)) fs.mkdirSync(options.path.src);
        if (!fs.existsSync(options.path.build)) fs.mkdirSync(options.path.build);
        if (!fs.existsSync(options.path.build_src)) fs.mkdirSync(options.path.build_src);

        gulp.src(options.glob.js, {
            cwd: options.path.src
        })
            .pipe(changed(options.path.build_src))
            .pipe(gulp.dest(options.path.build_src));
        done();
    };
    gulp.task(taskname, ['jshint'], fn);
};