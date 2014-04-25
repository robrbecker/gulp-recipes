var desc = require('./desc');

module.exports = function build(gulp, options) {
    var taskname = arguments.callee.name;
    desc(taskname, 'Build');
    gulp.task(taskname, options.build_tasks);
}