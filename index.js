var postcss = require('postcss');
var chara = require('./ghost.json');

module.exports = postcss.plugin('postcss-myplugin', function () {
    return function (css) {
        css.walkDecls('まほう', function (decl) {
            var ghosts = postcss.list.space(decl.value);

            decl.cloneBefore({ prop: 'background-repeat', value: 'no-repeat' });
            decl.cloneBefore({ prop: 'background-size', value: 'cover' });
            decl.cloneBefore({ prop: 'transform-origin', value: '0 0' });

            if ( ghosts == 'ほのお' ) {
              decl.cloneBefore({ prop: 'width',  value: '400px' });
              decl.cloneBefore({ prop: 'height', value: '400px' });
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ chara.fire +')' });

            } else if (ghosts == 'つえ') {
              decl.cloneBefore({ prop: 'width',  value: '400px' });
              decl.cloneBefore({ prop: 'height', value: '400px' });
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ chara.stick +')' });
            }

            decl.remove();
        });
    };
});
