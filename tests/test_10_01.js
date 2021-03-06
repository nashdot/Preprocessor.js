/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_10_01:issue9_1', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/issue9_1.js'), __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, "console.log('3 === 3');\n");

  t.end();
});
