module.exports = function(gulp, options) {

    var desc = require('./desc');
    var fs = require('fs');
    var changed = require('gulp-changed');
    var ts = require('gulp-tsc');

    var taskname = 'ts';

    desc(taskname, 'Compile TypeScript');

    var fn = function() {

        if (!fs.existsSync(options.path.src)) fs.mkdirSync(options.path.src);
        if (!fs.existsSync(options.path.build)) fs.mkdirSync(options.path.build, '0777');
        if (!fs.existsSync(options.path.build_src)) fs.mkdirSync(options.path.build_src, '0777');

        return gulp.src(options.glob.ts, {
            cwd: options.path.src
        })
            .pipe(changed(options.path.build_src))
            .pipe(ts(options.ts))
            .pipe(gulp.dest(options.path.build_src));
    };
    gulp.task(taskname, ['tslint'], fn);
};