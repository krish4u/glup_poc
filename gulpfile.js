const { watch } = require("gulp");
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

// Compiling SASS into CSS
function buildStyles() {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};
exports.buildStyles = buildStyles;

// Watching SASS chagnes
// exports.watch = function () {
//   gulp.watch('./scss/**/*.scss', ['sass']);
// };

gulp.task('watch', () => {
  gulp.watch('scss/*.scss', (done) => {
      gulp.series(['clean', 'styles'])(done);
  });
});

// function watchsass(){
//   return gulp.watch('scss/**/*.scss', (done) => {
//     gulp.series(['clean', 'styles'])(done);
//   });
// }

// compiling js into BABEL
function babelme() {
  return gulp.src('js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
}


// Gulp Default task
function defaultTask(cb) {
  // place code for your default task here
  buildStyles();
  babelme();
  cb();
}
exports.default = defaultTask