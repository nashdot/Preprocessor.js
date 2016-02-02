/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_06_03:globalDefines_3', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/issue11_3.js'), __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, "console.log('hi');\n");

  t.end();
});
