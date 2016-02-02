/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_08:preserveLineNumbers', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/preserve_lines.js'), __dirname + '/samples', true);
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, 'var i = 0;\n\n\n\ni = 2;\n\n\nconsole.log(i);\n');

  t.end();
});
