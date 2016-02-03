/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_12:issue10', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/issue10_main.js'), __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, "console.log('test');\nconsole.log('testing include');\n");

  t.end();
});
