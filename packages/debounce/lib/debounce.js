
module.exports = function debounce(func, wait = 250, immediate) {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  function later() {
    const last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      clearTimeout(timeout);
      if (!immediate) {
        result = func.apply(context, args);
        context = null;
        args = null;
      }
    }
  }

  return function debounced(...argz) {
    context = this;
    args = argz;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }
    return result;
  };
};
