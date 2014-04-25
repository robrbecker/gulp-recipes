var gulp = require('gulp');
var desc = require('./desc');
var ts = require('gulp-tsc');
var fs = require('fs');
var changed = require('gulp-changed');

module.exports = function ts(options) {

    var taskname = arguments.callee.name;

    desc(taskname, 'Compile TypeScript');

    var fn = function() {
        //console.log('Compiling ' + options.glob.ts + ' to ' + options.path.build_src);

        if (!fs.existsSync(options.path.src)) fs.mkdirSync(options.path.src);
        if (!fs.existsSync(options.path.build)) fs.mkdirSync(options.path.build, '0755');
        if (!fs.existsSync(options.path.build_src)) fs.mkdirSync(options.path.build_src, '0755');

        console.log('yep ' + JSON.stringify(gulp.src(options.glob.ts)));

        //.pipe(changed(options.path.build_src))
        return gulp.src(options.glob.ts)
            .pipe(ts(options.ts))
            .pipe(gulp.dest(options.path.build_src));

    }
    gulp.task(taskname, fn);
}