/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_11_01:issue16', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/issue16.js'), __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, '42\n\n');

  t.end();
});
