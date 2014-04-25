var desc = require('./desc');
var fs = require('fs');
var argv = require('yargs').argv;

module.exports = function new_recipe(gulp) {

    var taskname = 'new';

    desc(taskname, 'Create a new gulp recipe');

    var fn = function(done) {
        var argv = require('yargs').argv;
        if (!argv.recipe) {
            done('Please specify a recipe name via --recipe=name');
            return;
        }
        var newname = (argv.recipe || 'new').replace('.js', '') + '.js';
        if (fs.existsSync('./src/' + newname) && !argv.f) {
            done('./src/' + newname + ' already exists. Use -f to force overwrite.');
            return;
        }
        fs.createReadStream('./src/empty.js').pipe(fs.createWriteStream('./src/' + newname));
        console.log('Created ./src/' + newname);
        done();
    }
    gulp.task(taskname, fn);
}