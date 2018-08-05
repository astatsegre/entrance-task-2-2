const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const svgSprite = require("gulp-svg-sprite");

const config = {
  mode: {
    css: {
      render: {
        scss: {dest: "_sprite.scss"}
      },
      sprite: '../images/svg/_sprite',
      dest: '../sass'
    }
  },
  shape: {
    spacing: {padding: 1}
  }
};

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
  gulp.src('./images/svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./sass'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/*.scss', ['sass'])
});