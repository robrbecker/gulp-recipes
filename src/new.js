module.exports = function(gulp) {

    var desc = require('./desc');
    var fs = require('fs');
    var argv = require('yargs').argv;
    var path = require('path');
    var repl = require('gulp-replace');
    var rename = require('gulp-rename');


    var taskname = 'new';

    desc(taskname, 'Create a new gulp recipe');

    var fn = function(done) {
        var argv = require('yargs').argv;
        if (!argv.recipe) {
            done('Please specify a recipe name via --recipe=name');
            return;
        }
        var newname = (argv.recipe || 'new').replace('.js', '') + '.js';
        var src = path.resolve(__dirname, './empty.js');
        var targetDir = path.resolve(process.cwd(), 'src');
        var target = path.resolve(targetDir, newname);

        if (fs.existsSync(target) && !argv.f) {
            done(target + ' already exists. Use -f to force overwrite.');
            return;
        }

        console.log('Created ' + target + ' from ' + src);
        return gulp.src(src)
            .pipe(repl('TASKNAME', argv.recipe))
            .pipe(rename(newname))
            .pipe(gulp.dest(targetDir));
    };
    gulp.task(taskname, fn);
};