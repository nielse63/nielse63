
module.exports = (func, wait = 250, immediate = false) => {
  let timeout = null;

  return function fn(...args) {
    const context = this;

    function clear() {
      clearTimeout(timeout);
    }

    function exec() {
      return func.apply(context, ...args);
    }

    if (immediate && !timeout) exec();
    clear();
    if (!immediate) timeout = setTimeout(exec, wait);
  };
};
