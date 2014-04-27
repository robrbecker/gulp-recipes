module.exports = function(gulp, options) {

    var desc = require('./desc');

    var taskname = 'build';
    desc(taskname, 'Build');
    gulp.task(taskname, options.build_tasks);
};