module.exports = function(gulp, options) {

    var desc = require('./desc');

    var taskname = 'TASKNAME';

    desc(taskname, 'Describe your task here');

    // TODO if your task can be run completely asynchronously, just remove the done param and invocation
    var fn = function(done) {
        // TODO do work here
        // If you want to error out, call done('error message'); and return
        // if you kick of an asynchronous task, you can
        // return a promise or stream to sequence this task correctly
        done();
    };
    gulp.task(taskname, fn);
};