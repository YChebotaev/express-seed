gulp.task('js', ['js:script']);

gulp.task('js:script', function() {
  return browserify('./assets/javascript/script.js')
    .bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('public/js/'));
});