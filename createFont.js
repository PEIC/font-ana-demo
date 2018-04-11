var opentype = require('opentype.js');
var _ = require('lodash');
var fs = require('fs');

var notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new opentype.Path()
});

var ht = opentype.loadSync('./font/黑体.otf');
var hyt = opentype.loadSync('./font/黄油体.ttf');
var lbk = opentype.loadSync('./font/刘兵克曦冉体.ttf');
var wenshang = opentype.loadSync('./font/造字工房文尚.ttf');
var Candcu = opentype.loadSync('./font/Candcu.ttf');




var glyphs = [notdefGlyph]
    .concat(_.uniq('万企明道'.split('')).map(letter => lbk.charToGlyph(letter)))
    .concat(_.uniq('MINGDAOmingdao.com'.split('')).map(letter => hyt.charToGlyph(letter)))
    .concat(_.uniq('沟通要开放，协作宜扁平'.split('')).map(letter => wenshang.charToGlyph(letter)))
    .concat(_.uniq('帮助达成业务成果果然有效'.split('')).map(letter => hyt.charToGlyph(letter)));

// 字体 unicode值替换
// 用法场景 反爬虫 混淆内容
// var nihaoma = _.uniq('你好吗'.split('')).map(letter => lbk.charToGlyph(letter).unicode);
// var wobuhao = _.uniq('我不好'.split('')).map(letter => lbk.charToGlyph(letter));

// nihaoma.forEach((unicode, index) => {
//     wobuhao[index].unicode = unicode;
//     wobuhao[index].unicodes = [unicode];
// });
// var glyphs = [notdefGlyph].concat(wobuhao)

var font = new opentype.Font({
    familyName: 'MDICON',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,
    glyphs: glyphs
});

fs.writeFileSync('./output/fonticon.ttf', new Buffer(font.toArrayBuffer()));