const gulp = require('gulp')
const replace = require('gulp-string-replace')

gulp.task('injectApiHost', () => {
  gulp.src(['./src/index.html'])
    .pipe(replace(new RegExp('@api_host@', 'g'), process.env.API_HOST || '/todos'))
    .pipe(gulp.dest('./public/'))
})

gulp.task('copy', function () {
  gulp.src('./src/styles.css')
    .pipe(gulp.dest('./public/'))
  gulp.src('./src/favicon.png')
    .pipe(gulp.dest('./public/'))
})

gulp.task('default', ['copy', 'injectApiHost'])
