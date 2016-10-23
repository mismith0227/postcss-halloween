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

## イラスト提供してくれる方へ

このプラグインをMITで公開したいのですが、再配布可能なイラストがなかなかありません。
再配布OKなイラストとして提供してくれる方はぜひプルリクお願いいたします！

ハロウィンのおばけをシルエットのようなイラストで描いていただけるとありがたいです。

imagesディレクトリにSVG形式の画像を入れてプルリク送っていただければ、こちらでコードに書きかえます！

## Lisense

Code licensed under the MIT.
