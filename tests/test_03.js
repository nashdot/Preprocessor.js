/* eslint max-len: 0 */
/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_03:test1', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/test1.js'), __dirname + '/samples');
  var src = pp.process({ 'VERSION': { 'type': 'var', 'value': '"1.0"' } }, console.log).replace(/\r/g, '');
  t.equal(src, '\nconsole.log("UNDEFINED is not defined");\n\nconsole.log("UNDEFINED is not defined (else)");\n\nvar version = "1.0";\n');

  t.end();
});
