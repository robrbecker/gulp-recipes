// If you want to create your own build you can copy this file to custom.js
// modify the settings, or included recipes and update the main gulpfile
// to run custom instead of standard

module.exports = function(gulp, options) {
    var _ = require('lodash');
    var recipe = require('./recipe');

    options = _.merge({
        path: {
            src: './src/',
            build: './build/',
            build_src: './build/src/',
            dist: './dist/'
        },
        glob: {
            ts: './src/**/*.ts',
            js: './src/**/*.js'
        },
        build_tasks: ['js', 'ts'],
        'default': ['clean', 'build'],
        traceur: {
            "modules": "commonjs",
            "sourceMap": true,
            "types": true,
            "typeAssertions": true,
            "typeAssertionModule": "assert",
            "annotations": true
        },
        ts: {
            sourceMap: true,
            declaration: true,
            module: 'commonjs',
            target: 'ES5',
            emitError: false,
            tmpDir: '/tmp/',
            noLib: true
        },
        port: 9000
    }, options);

    options.glob.src = [options.glob.js, options.glob.ts];
    options.ts.outDir = options.path.build;

    // make a meal from recipes
    recipe(gulp, options, [
        require('./help'),
        require('./new'),
        require('./customize'),
        require('./clean'),
        require('./ts'),
        require('./js'),
        require('./build'),
        require('./default'),
        require('./serve'),
        require('./dist'),
        require('./bump'),
        require('./watch'),
    ]);

}