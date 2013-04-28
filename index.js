var browser
if (typeof window === 'undefined') {
  browser = false
} else {
  browser = window
}

module.exports = function (name) {
  if (browser) return {}
  return require(name)
}
