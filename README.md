# postcss-halloween

## gulp

```
var postcss = require('gulp-postcss');
var halloween = require("postcss-halloween");

gulp.task('styles', function() {
  return gulp.src([
    'src/css/style.css',
  ])
  .pipe(postcss([halloween]))
  .pipe(gulp.dest('build/css'))
});
```

## usage

```
div {
  おばけ: 名前;
}
```
