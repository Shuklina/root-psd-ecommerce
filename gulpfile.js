var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync   = require('browser-sync');

gulp.task('sass', function () {
  const sass = require('gulp-sass');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp.src('scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function (){
  gulp.watch('scss/style.scss', ['sass']);
})

gulp.task('lint', function() {
  runSequence(
    'lint:w3c',
    'lint:stylelint',
    'lint:access'
  );
});

gulp.task('build', function() {
  runSequence(
    'sass'
  )
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ['./' ],
    }
  })
});

gulp.task('default', function() {
  runSequence(
    ['sass'],
    'browserSync',
    'watch'
  )
});

gulp.task('lint:w3c', function () {
  const w3cjs = require('gulp-w3cjs');

  return gulp.src('*.html')
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
});

gulp.task('lint:stylelint', function() {
  const stylelint = require('gulp-stylelint');
  return gulp
    .src('scss/**/*.scss')
    .pipe(stylelint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
});

gulp.task('lint:access', function() {
  const access = require('gulp-accessibility');
  return gulp.src('*.html')
    .pipe(access({
      force: false,
      accessibilityLevel: 'WCAG2AA',
      reportLevels: {
        notice: true,
        warning: false,
        error: true
      }
    }));
});
