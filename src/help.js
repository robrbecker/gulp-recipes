var gulp = require('gulp');
var colors = require('chalk');
var gulpdesc = require('./desc');

module.exports = function help() {

    gulpdesc('help', 'List the available tasks');
    var fn = function(done) {

        var filter = function(inc) {
            return function(n) {
                var hasDash = n.search(/[-_:]/) !== -1;
                return inc && hasDash || !inc && !hasDash;
            }
        },
            header = function(text) {
                console.log('');
                console.log(colors.gray(text));
                console.log('------------------------------');
            };

        var k = Object.keys(gulp.tasks).sort();

        console.log('gulp [task] [task]...');
        console.log('');

        if (k.length > 0) {
            header('Main Tasks');

            k.filter(filter(false)).forEach(function(name) {
                var desc = gulpdesc(name);
                if (desc) desc = ' - ' + desc;
                console.log('    ' + colors.cyan(name) + desc);
            });

            header('Sub Tasks');

            k.filter(filter(true)).forEach(function(name) {
                var desc = gulpdesc(name);
                if (desc) desc = ' - ' + desc;
                console.log('    ' + name + desc);
            });
        }
        else {
            console.log('No tasks defined. Add one to your gulpfile.js');
        }
        console.log('');
        done();
    }
    gulp.task('help', fn);
}