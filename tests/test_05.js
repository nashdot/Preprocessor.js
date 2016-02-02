/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('test_05:define', function(t) {
  var content = fs.readFileSync(__dirname + '/samples/define.js', 'utf-8');
  console.log(content);
  var pp = new Preprocessor(content, __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, 'var angle = 171.88733853924697;\n');

  t.end();
});
