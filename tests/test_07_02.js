/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');

test('include_2', function(t) {
  t.plan(1);
  var pp = new Preprocessor('// #include_once "number.js"\n// #include_once "number.js"\n', __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src.trim(), '42');

  t.end();
});
