gulp.task('templates', function() {
  return gulp.src('assets/jade/templates/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/templates/'));
});