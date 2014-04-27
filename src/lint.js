module.exports = function(gulp, options) {

    var desc = require('./desc');

    var taskname = 'lint';

    desc(taskname, 'Validate source');

    gulp.task(taskname, ['jshint', 'tslint']);
};