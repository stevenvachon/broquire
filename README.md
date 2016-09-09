# broquire [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Require different values in a web browser.

This module allows you to explicitly load different modules on the client than on the server without the need for aliasing. You can point to polyfilled globals, custom objects or functions or nothing at all. Subsequently, Browserify will be "tricked" out of bundling the original module, keeping your file size small.



## Installation

[Node.js](http://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install broquire
```


## `broquire(id[, browserValue])`

In Node.js, the return value is always identical to regular [`require`](https://nodejs.org/api/modules.html#modules_module_require_id).

In a web browser, an empty `Object` will be returned if no `browserValue` is given:
```js
var broquire = require("broquire")(require);
var utilities = broquire("./utils");
if (utilities.cleanup === undefined) utilities.cleanup = function(){};
```

If an `Object` is passed, then it will be returned:
```js
var broquire = require("broquire")(require);
var utilities = broquire("./utils", { cleanup:function(){} });
```

If a `String` is given, then `window[browserValue]` will be returned:
```js
var broquire = require("broquire")(require);
var URL = broquire("whatwg-url", "window").URL;
```


## `broquire.isBrowser`

Has a value of `true` when running in a web browser, and `false` when running in Node.js


## `broquire.isServer`

Has a value of `true` when running in Node.js, and `false` when running in a web browser.


## FAQ

*Why do I need to pass `require` in to this function?*

Every time Node.js executes a file, it gives you a version of `require` that will resolve modules relative to that file and directory. Passing your `require` to `broquire` allows it to import modules exactly as you would with a regular require statement.


[npm-image]: https://img.shields.io/npm/v/broquire.svg
[npm-url]: https://npmjs.org/package/broquire
[travis-image]: https://img.shields.io/travis/stevenvachon/broquire.svg
[travis-url]: https://travis-ci.org/stevenvachon/broquire
