/* eslint no-console: 0 */

var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');
var fs = require('fs');

test('define', function(t) {
  var pp = new Preprocessor(fs.readFileSync(__dirname + '/samples/define.js'), __dirname + '/samples');
  var src = pp.process({}, console.log).replace(/\r/g, '');
  t.equal(src, 'var angle = 171.88733853924697;\n');

  t.end();
});
