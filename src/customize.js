module.exports = function customize(gulp, options) {

    var desc = require('./desc');
    var fs = require('fs');
    var path = require('path');

    var taskname = arguments.callee.name;

    desc(taskname, 'Copy the standard build to gulpcustom.js so you can customize it');

    var fn = function(done) {
        fs.createReadStream(path.resolve(__dirname + '/standard.js')).pipe(fs.createWriteStream('./gulpcustom.js'));
        console.log('Now just modify your gulpfile.js to have require(\'./gulpcustom\')();');
        console.log('Feel free to customize gulpcustom.js as much as you like!');
        done();
    }
    gulp.task(taskname, fn);
}