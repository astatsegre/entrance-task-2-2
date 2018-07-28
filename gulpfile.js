const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/*.scss', ['sass'])
});