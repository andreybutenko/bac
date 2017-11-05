var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('scripts', function () {
  return gulp.src(['./assets/scripts/util.js', './assets/scripts/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('scripts:watch', function () {
  gulp.watch('./assets/scripts/*.js', ['scripts']);
});
