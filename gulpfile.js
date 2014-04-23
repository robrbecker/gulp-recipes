var gulp = require('gulp');
var traceur = require('gulp-traceur');
var connect = require('gulp-connect');
var bump = require('gulp-bump');
var yargs = require('yargs');
var gulpIf = require('gulp-if');
var ts = require('gulp-tsc');
var open = require('open');
//var browserify = require('gulp-browserify');

var path = {
    src: './src/**/*.js',
    ts_src: './src/**/*.ts',
    compiled_src: './compiled/src/',
    dist: './dist/'
};

var traceurOptions = {
    "modules": "commonjs",
    "sourceMap": true,
    "types": true,
    "typeAssertions": true,
    "typeAssertionModule": "assert",
    "annotations": true
};

var tsOptions = {
    // Enable sourcemaps
    sourceMap: true,

    // Generates corresponding .d.ts file.
    declaration: true,

    // Specify module code generation: 'commonjs' or 'amd'
    module: 'commonjs',

    // Specify ECMAScript target version: 'ES3' (default), or 'ES5'
    target: 'ES5',

    // don't blow up gulp when compilation fails
    emitError: false,

    // where to write temp files
    tmpDir: '/tmp',

    noLib: true
};

// TRANSPILE
gulp.task('build', function(done) {
    gulp.src(path.src)
        .pipe(traceur(traceurOptions))
        .pipe(gulp.dest(path.compiled_src));


    gulp.src(path.ts_src)
        .pipe(ts(tsOptions))
        .pipe(gulp.dest(path.compiled_src));

});

gulp.task('_dist', function() {
    gulp.src('**/*.js', {
        base: path.compiled_src
    })
        .pipe(gulp.dest(path.dist));
});

// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
    gulp.watch([path.src, path.ts_src], ['build']);
});

gulp.task('clean', function(done) {

});

gulp.task('bump', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump({
            type: yargs.argv.type || 'patch'
        }))
        .pipe(gulp.dest('./'));
});


// WEB SERVER
gulp.task('serve', function() {
    connect.server({
        root: [__dirname],
        port: 9000,
        livereload: true
    });
    open('http://localhost:9000/');
});

gulp.task('dist', ['build', '_dist']);
gulp.task('default', ['build']);
