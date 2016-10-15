var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rollup = require('rollup-stream');
var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var source = require('vinyl-source-stream');

gulp.task('connect', () => {
    connect.server();
});

var cache;
gulp.task('js', function() {
  return rollup({
    entry: './src/js/index.js',
    dest: 'index.js',
    plugins: [
        nodeResolve({ jsnext: true, main: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
    ],
      cache: cache
    })

    .on('bundle', function(bundle) {
      cache = bundle;
    })

    // after listening for the 'bundle' event, proceed as usual.
    //.pipe(source('node_modules/**/*.js'))
    .pipe(source('index.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('build', [
    'js',
    'sass'
]);

gulp.task('default', ['build', 'connect', 'watch']);
