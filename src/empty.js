var gulp = require('gulp');
var desc = require('./desc');

// TODO just rename this function to change the name of the task
module.exports = function empty(options) {

    // use the function name as the task name, or you can change it to what you like
    var taskname = arguments.callee.name;

    desc(taskname, 'Describe your task here');

    // TODO if your task can be run asynchronously, just remove the done param and invocation
    var fn = function(done) {
        // TODO do work here
        // If you want to error out, call done('error message'); and return
        done();
    }
    gulp.task(taskname, fn);
}