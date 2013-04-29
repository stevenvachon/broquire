var browser
if (typeof window === 'undefined') {
  browser = false
} else {
  browser = window
  window.broquire = {test:4}
}

var assert = require('assert')
  , broquire = require('./')(require)
  , ok = require('okdone')
  ;

if (browser) {
  assert.deepEqual(broquire('name'), {})
  ok('default')
  assert.deepEqual(broquire('name', {test:1}), {test:1})
  ok('value')
  assert.deepEqual(broquire('name', 'broquire'), {test:4})
  ok('window')
} else {
  assert.deepEqual(broquire('assert'), require('assert'))
  ok('node')
}

ok.done()