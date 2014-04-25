var gulp = require('gulp');
var desc = require('./desc');

module.exports = function(options) {
    var taskname = 'default';
    var tasks = '';
    if (!options['default']) {
        options['default'] = ['build'];
    }
    if (typeof(options['default']) === 'string') {
        options['default'] = [options['default']];
    }
    tasks = options['default'].join(',');
    desc(taskname, tasks);
    gulp.task(taskname, options['default']);
}