var postcss = require('postcss');
var ghost = require('./ghosts.json');

module.exports = postcss.plugin('postcss-myplugin', function () {
    return function (css) {
        css.walkDecls('おばけ', function (decl) {
            var ghostvalue = postcss.list.space(decl.value);

            decl.cloneBefore({ prop: 'background-repeat', value: 'no-repeat' });
            decl.cloneBefore({ prop: 'background-size', value: 'cover' });
            decl.cloneBefore({ prop: 'transform-origin', value: '0 0' });
            decl.cloneBefore({ prop: 'width',  value: '400px' });
            decl.cloneBefore({ prop: 'height', value: '400px' });

            if ( ghostvalue == 'おおかみおとこ' ) {
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ ghost.wolfman +')' });
            } else if (ghostvalue == 'おばけ') {
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ ghost.ghost +')' });
            } else if (ghostvalue == 'かぼちゃおばけ') {
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ ghost.pumpkin +')' });
            } else if (ghostvalue == 'こうもり') {
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ ghost.bats +')' });
            } else if (ghostvalue == 'まじょ') {
              decl.cloneBefore({ prop: 'background-image', value: 'url('+ ghost.witch +')' });
            }

            decl.remove();
        });
    };
});
