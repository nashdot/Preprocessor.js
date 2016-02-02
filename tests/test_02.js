var test = require('tape');

var Preprocessor = require(__dirname + '/../Preprocessor.js');

test('test_02:evaluate', function(t) {
  var defines = { 'VERSION': { 'type': 'var', 'value': '"1.0"' } };
  t.equal(defines['VERSION'].value + ';', Preprocessor.evaluate(defines, "'\"'+VERSION+'\";'"));
  t.equal('"' + 'Hello world!' + '";', Preprocessor.evaluate(defines, '"\\"Hello world!\\";";'));
  t.equal('2;', Preprocessor.evaluate(defines, '(1+1)+";"'));

  t.end();
});
