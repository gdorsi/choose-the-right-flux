var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rollup = require('gulp-rollup');
var babel = require('rollup-plugin-babel');

gulp.task('connect', () => {
    connect.server({
        livereload: true
    });
});

gulp.task('html', () => {
    gulp.src('./index.html')
        .pipe(connect.reload());
});

gulp.task('js', () => {
    gulp.src('./src/js/**/*.js')
        .pipe(rollup({
            entry: './src/js/index.js',
            plugins: [
                babel({
                    exclude: 'node_modules/**'
                })
            ]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('build', [
    'js',
    'sass'
]);

gulp.task('default', ['build', 'connect', 'watch']);