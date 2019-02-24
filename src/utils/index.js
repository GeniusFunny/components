export function throttle(fn, wait = 200) {
  let start = Date.now(),
    timeout = null,
    isFirst = true
  return function () {
    let now = Date.now(),
      args = Array.prototype.slice.call(arguments),
      self = this
    clearTimeout(timeout)
    if (now - start >= wait || isFirst) {
      fn.apply(self, args)
      start = now
      isFirst = false
    } else {
      timeout = setTimeout(() => {
        fn.apply(self, args)
      }, timeout)
    }
  }
}

export function debounce(fn, wait = 200) {
  let self = this,
    timeout = null
  return function() {
    let args = Array.prototype.slice.call(arguments)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  }
}
