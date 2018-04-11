var opentype = require('opentype.js');

var font = opentype.loadSync('./font/刘兵克曦冉体.ttf');
console.log(font.names);
console.log(JSON.stringify(font.charToGlyph('非').getPath().commands));
