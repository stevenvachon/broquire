var browser
if (typeof window === 'undefined') {
  browser = false
} else {
  browser = window
  window.broquire = true
}

var assert = require('assert')
  , broquire = require('./')

if (browser) {
  assert.deepEqual(broquire('name'), {})
  assert.deepEqual(broquire('name', {test:1}), {test:1})
  assert.equal(broquire('broquire', true), true)
} else {
  assert.deepEqual(broquire('assert'), require('assert'))
}