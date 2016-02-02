/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');

test('test_09_01:includeGlob_1', function(t) {
  var pp = new Preprocessor('// #include_once "subdir/*.js"\n', __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src.trim(), "'glob1.js';'glob2.js';");

  t.end();
});
