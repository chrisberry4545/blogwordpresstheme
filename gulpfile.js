// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./styles/**/*.scss', ['sass'])
    // .on('change', function(event) {
    //     console.log('File ' + event.path + ' was ' + event.type);
    // });
})