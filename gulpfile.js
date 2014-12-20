var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulp = require('gulp');

require('./tasks');

gulp.task('default',['assets']);

gulp.task('assets',['templates', 'css', 'js']);

gulp.task('js', ['js:script']);

gulp.task('css', ['css:style']);

gulp.task('templates', function() {
  return gulp.src('assets/jade/templates/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/templates/'));
});

gulp.task('css:style', function() {
  return gulp.src('assets/stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('public/css'));
});

gulp.task('js:script', function() {
  return browserify('./assets/javascript/script.js')
    .bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/', ['assets']);
});

module.exports = gulp;