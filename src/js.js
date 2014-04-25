var desc = require('./desc');
var fs = require('fs');

// TODO just rename this function to change the name of the task
module.exports = function js(gulp, options) {

    // use the function name as the task name, or you can change it to what you like
    var taskname = arguments.callee.name;

    desc(taskname, 'Copy JS files to ' + options.path.build_src);

    var fn = function(done) {

        if (!fs.existsSync(options.path.src)) fs.mkdirSync(options.path.src);
        if (!fs.existsSync(options.path.build)) fs.mkdirSync(options.path.build);
        if (!fs.existsSync(options.path.build_src)) fs.mkdirSync(options.path.build_src);

        gulp.src(options.glob.js)
            .pipe(gulp.dest(options.path.build_src));
        done();
    }
    gulp.task(taskname, fn);
}