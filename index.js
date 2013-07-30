module.exports = function (require) {
  function broquire (name, winstr) {
    if (process.browser) {
      if (typeof winstr === 'undefined') return {}
      if (typeof winstr === 'string') return window[winstr]
      return winstr
    }
    return require(name)
  }
  return broquire
}
