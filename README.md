# postcss-halloween

## install

```
npm install postcss-halloween
```

## gulp

```
var postcss = require('gulp-postcss');

gulp.task('styles', function() {
  return gulp.src([
    'src/css/style.css',
  ])
  .pipe(postcss([
      require("postcss-halloween")
    ]))
  .pipe(gulp.dest('build/css'))
});
```

## usage

```
.foo {
  おばけ: かぼちゃおばけ;
}
```

## Values

### おおかみおとこ / Wolfman

```
.foo {
  おばけ: おおかみおとこ;
}
```

![おおかみおとこ](https://github.com/mismith0227/postcss-halloween/blob/images/images/wolfman.png)

by [@spicagraph](https://github.com/spicagraph)

### おばけ / Ghost

```
.foo {
  おばけ: おばけ;
}
```

![おばけ](https://github.com/mismith0227/postcss-halloween/blob/images/images/ghost.png)

by [@spicagraph](https://github.com/spicagraph)

### かぼちゃおばけ / Pumpkin

```
.foo {
  おばけ: かぼちゃおばけ;
}
```

![かぼちゃおばけ](https://github.com/mismith0227/postcss-halloween/blob/images/images/pumpkin.png)

by [@spicagraph](https://github.com/spicagraph)

### こうもり / Bats

```
.foo {
  おばけ: こうもり;
}
```

![こうもり](https://github.com/mismith0227/postcss-halloween/blob/images/images/bats.png)

by [@spicagraph](https://github.com/spicagraph)

### まじょ / Witch

```
.foo {
  おばけ: まじょ;
}
```

![まじょ](https://github.com/mismith0227/postcss-halloween/blob/images/images/witch.png)

by [@spicagraph](https://github.com/spicagraph)

### ドラキュラ / Dracula

```
.foo {
  おばけ: ドラキュラ;
}
```

![ドラキュラ](https://github.com/mismith0227/postcss-halloween/blob/images/images/dracula.png)

by [@rokuzeudon](https://github.com/rokuzeudon)

### フランケンシュタイン / Frankenstein

```
.foo {
  おばけ: フランケンシュタイン;
}
```

![フランケンシュタイン](https://github.com/mismith0227/postcss-halloween/blob/images/images/frankenstein.png)

by [@rokuzeudon](https://github.com/rokuzeudon)

### ミイラおとこ / Mummy

```
.foo {
  おばけ: ミイラおとこ;
}
```

![ミイラおとこ](https://github.com/mismith0227/postcss-halloween/blob/images/images/mummy.png)

by [@rokuzeudon](https://github.com/rokuzeudon)

## イラスト提供してくれる方へ

このプラグインをMITで公開したいのですが、再配布可能なイラストがなかなかありません。
再配布OKなイラストとして提供してくれる方はぜひプルリクお願いいたします！

ハロウィンのおばけをシルエットのようなイラストで描いていただけるとありがたいです。
imagesディレクトリにSVG形式の画像を入れてプルリク送っていただければ、こちらでコードに書きかえます！

## Lisense

Code licensed under the MIT.
