module.exports = function(gulp, options) {

    var desc = require('./desc');
    var connect = require('gulp-connect');
    var open = require('open');

    var taskname = 'serve';

    desc(taskname, 'Open the project website');

    var fn = function(done) {
        options.port = options.port || 9000;
        connect.server({
            root: [__dirname],
            port: options.port,
            livereload: true
        });
        open('http://localhost:' + options.port + '/');

        done();
    };
    gulp.task(taskname, fn);
};