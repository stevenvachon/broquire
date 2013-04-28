## Broquire

Require that returns different values in browsers than node.js and tricks browserify out of bundling the required node module.

[![browser support](https://ci.testling.com/mikeal/broquire.png)](https://ci.testling.com/mikeal/broquire)

#### broquire(name[, browserValue])

Takes a named identifier for a module identical to node's `require`. In node.js the return value is always identical to node's `require`.

If no `browserValue` is given an empty object will be returned in the browser. If a string is given then `window[browserValue]` will be returned. If an object is passed then it will be returned.

```javascript
var broquire = require('broquire')
var utilities = broquire('./utils')
if (!utilities.cleanup) utilities.cleanup = function () {}
```

```javascript
var broquire = require('broquire')
var utilities = broquire('./utils', {cleanup:function () {}})
```

```javascript
var broquire = require('broquire')
var eioClient = broquire('engine.io-client', 'eio')
```



