var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');

test('test_01:init', function(t) {
  t.ok(typeof Preprocessor === 'function', 'Preprocessor is a function');

  t.end();
});

test('test_01:verbose', function(t) {
  var pp = new Preprocessor('// #ifdef UNDEFINED\ntest();\n// #endif\n');
  var msgs = '';
  pp.process({}, function(msg) { msgs += msg; });
  t.ok(msgs.length > 0, 'Have a message');

  t.end();
});
