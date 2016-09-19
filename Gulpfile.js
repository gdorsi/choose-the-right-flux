var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rollup = require('gulp-rollup');
var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

gulp.task('connect', () => {
    connect.server();
});

gulp.task('js', () => {
    gulp.src(['./src/js/**/*.js', './node_modules/**/*.js'])
        .pipe(rollup({
            entry: './src/js/index.js',
            dest: 'index.js',
            plugins: [
                nodeResolve({ jsnext: true, main: true }),
                commonjs(),
                babel({
                    exclude: 'node_modules/**'
                }),
            ]
        }).on('error', (err) => console.log(err.message)))
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