/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_04:test2', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/test2.js'), __dirname + '/samples');
  var src = pp.process({ 'VERSION': { 'type': 'var', 'value': '"1.0"' } }, console.log).replace(/\r/g, '');
  t.equal(src, '    console.log("2==2")\n    console.log("VERSION=="+"1.0");\n');

  t.end();
});
