const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const svgSprite = require("gulp-svg-sprites");

gulp.task('sass', () => {
  return gulp.src('./sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('./css'));
});

gulp.task('svg', () => {
  gulp.src('./images/*.svg')
    .pipe(svgSprite({
      cssFile: "../sass/_sprite.scss",
      preview: false,
      svg: {
        sprite: "images/_sprite.svg"
      }
    }))
    .pipe(gulp.dest('./images'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/*.scss', ['sass'])
});