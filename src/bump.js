module.exports = function bump(gulp, options) {

    var desc = require('./desc');
    var yargs = require('yargs');

    var taskname = arguments.callee.name;

    desc(taskname, 'Bump a version number in a JSON config file. Args: --type=patch|minor|major');

    var fn = function() {
        return gulp.src(['./bower.json', './package.json'])
            .pipe(bump({
                type: yargs.argv.type || 'patch'
            }))
            .pipe(gulp.dest('./'));
    }
    gulp.task(taskname, fn);
}