module.exports = function(gulp, options) {

    var desc = require('./desc');
    var plato = require('gulp-plato');
    var connect = require('gulp-connect');
    var open = require('open');
    var path = require('path');

    var taskname = 'analyze';

    desc(taskname, 'Generate code complexity report');

    var fn = function(done) {
        var html = path.resolve(options.path.report, 'index.html');
        console.log('Building report to ' + html);

        gulp.src(options.glob.js, {
            cwd: options.path.build_src
        })
            .pipe(plato(options.path.report, {
                jshint: {
                    options: {
                        strict: true
                    }
                },
                complexity: {
                    trycatch: true
                },

            }))
            .pipe(open(html));
        done();
    };
    gulp.task(taskname, ['build'], fn);
};