gulp.task('css', ['css:style']);

gulp.task('css:style', function() {
  return gulp.src('assets/stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('public/css'));
});