var browser
if (typeof window === 'undefined') {
  browser = false
} else {
  browser = true
}

module.exports = function (name, winstr) {
  if (browser) {
    if (!winstr) return {}
    if (typeof winstr === 'string') return window[winstr]
    return winstr
  }
  return require(name)
}
