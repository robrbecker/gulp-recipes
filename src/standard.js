// If you want to create your own build you can copy this file to custom.js
// modify the settings, or included recipes and update the main gulpfile
// to run custom instead of standard

module.exports = function(gulp) {
    var _ = require('lodash');
    var fs = require('fs');
    var path = require('path');
    ///var process = require('process');

    var options = null;
    var local = path.resolve(process.cwd(), 'gulpconfig.json');
    // Load the local gulpconfig.json if present
    var configfile = '../gulpconfig.json';
    if (fs.existsSync(local)) {
        configfile = local;
    }
    options = require(configfile);

    // async copy gulpconfig to the local project
    gulp.src(path.resolve(__dirname, '../gulpconfig.json')).pipe(gulp.dest(process.cwd()));

    options.glob.src = [options.glob.js, options.glob.ts];

    // make a meal from recipes
    for (var i = 0; i < options.recipes.length; i++) {
        require(options.recipes[i])(gulp, options);
    };

}