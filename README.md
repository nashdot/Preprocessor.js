Preprocessor.js - A JavaScript preprocessor
===========================================
Provides a JavaScript source file preprocessor.

Directives
----------
* Includes (always relative to the `baseDirectory`, defaults to "."):

 ```javascript
 ...
 // #include "path/to/file.js"
 ...
 ```

* Static conditions:

 ```javascript
 // #ifdef FULL
 console.log("Including extension");
 // #include "path/to/extension.js"
 // #else
 console.log("Not including extension");
 // #endif
 ```

* Inverse static conditions:

 ```javascript
 // #ifndef FULL
 console.log("Not including extension");
 // #else
 console.log("Including extension");
 // #include "path/to/extension.js"
 // #endif
 ```

* Evaluable conditions:

 ```javascript
 // #if 1==2
 console.log("1==2");
 // #elif 2==2
 console.log("2==2");
 // #endif
 ```

* Inline variables and functions:

 ```js
 // #define var PI=Math.PI
 // #define function RADTODEG(x){return x*180/PI}
 var angle = // #put RADTODEG(3)+";"
 ```

* Writing the result of evaluated expressions:

  ```javascript
  var version = // #put '"'+VERSION+'";"'
  var str = // #put "\"Hello world!\";"
  var onePlusOne = // #put (1+1)+";"
  ```

Features
--------
* [CommonJS](http://www.commonjs.org/) compatible
* [RequireJS](http://requirejs.org/)/AMD compatible
* [node.js](http://nodejs.org) compatible, also available via [npm](https://npmjs.org/package/preprocessor.js)
* Fully documented using [jsdoc3](https://github.com/jsdoc3/jsdoc)
* Well tested through [tape](https://github.com/substack/tape)
* Zero production dependencies
* Small footprint

Command line utility
--------------------
Install via npm: `npm -g install preprocessor`

#### Command line ####

Usage: `preprocess sourceFile [baseDirectory] [-myKey[=myValue], ...] [--verbose] [> outFile]`

```bash
preprocess Source.js . -FULL=true > Source.full.js
```

API
---
The API is quite simple:

```javascript
var result = new Preprocessor(
    mainFileSource,
    baseDirectoryOrIncludes
).process(defines);
```

with `baseDirectoryOrIncludes` being either a string containing the path to the base directory or an object of included
sources by filename. When running in a browser, only the later is supported.

#### node.js / CommonJS ####

```javascript
var Preprocessor = require("preprocessor");
var source = "..."; // e.g. through fs.readFile
var pp = new Preprocessor(source, ".");
console.log(pp.process({
    FULL: true
}));
```

#### RequireJS / AMD ####

```javascript
require(["/path/to/Preprocessor.js"], function(Preprocessor) {
    var source = "..."; // e.g. through fs.readFile / $.ajax
    var pp = new Preprocessor(source, ".");
    console.log(pp.process({
        FULL: true
    }));
});
```

#### Browser / shim ####
**Note:** To use the `#include` directive in the browser, do not specify the base directory but an object of included
sources by filename:

```html
<script src="//raw.github.com/nashdot/Preprocessor.js/master/Preprocessor.js"></script>
```

```javascript
var Preprocessor = nashdot.Preprocessor;
var source = "..."; // e.g. through. $.ajax
var pp = new Preprocessor(source, {
    "./includes/extension.js": "var myVar = 2;" // <- #include "includes/extension.js"
});
alert(pp.process({
    FULL: true
}));
```

Using includes instead of a base directory like shown in the example above is supported regardless of the platform you
are on.

Downloads
---------
* [ZIP-Archive](https://github.com/nashdot/Preprocessor.js/archive/master.zip)
* [Tarball](https://github.com/nashdot/Preprocessor.js/tarball/master)

Documentation
-------------
* [View documentation](http://htmlpreview.github.io/?https://github.com/nashdot/Preprocessor.js/blob/master/docs/Preprocessor.html)

Tests (& Examples) [![Build Status](https://travis-ci.org/nashdot/Preprocessor.js.png?branch=master)](https://travis-ci.org/nashdot/Preprocessor.js)
------------------
* [View source](https://github.com/nashdot/Preprocessor.js/blob/master/tests/suite.js)
* [View report](https://travis-ci.org/nashdot/Preprocessor.js)

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
