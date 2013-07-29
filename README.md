## Broquire

Require that returns different values in browsers than node.js and tricks browserify out of bundling the required node module.

[![browser support](https://ci.testling.com/mikeal/broquire.png)](https://ci.testling.com/mikeal/broquire)

#### broquire(name[, browserValue])

Takes a named identifier for a module identical to node's `require`. In node.js the return value is always identical to node's `require`.

If no `browserValue` is given an empty object will be returned in the browser. If a string is given then `window[browserValue]` will be returned. If an object is passed then it will be returned.

```javascript
var broquire = require('broquire')(require)
var utilities = broquire('./utils')
if (!utilities.cleanup) utilities.cleanup = function () {}
```

```javascript
var broquire = require('broquire')(require)
var utilities = broquire('./utils', {cleanup:function () {}})
```

```javascript
var broquire = require('broquire')(require)
var eioClient = broquire('engine.io-client', 'eio')
```

*Why do I need to pass require in to this function?*

Every time node executes a file it gives you a version of require that will resolve modules relative to that file and directory. Passing your `require` to `broquire` allows it to import node modules exactly as you would with a regular require statement.


