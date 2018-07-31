
module.exports = (callback, delay = 250, immediate = false) => {
  let timeout = null;

  return function fn(...args) {
    const context = this;

    function clear() {
      clearTimeout(timeout);
    }

    function exec() {
      return callback.apply(context, ...args);
    }

    if (immediate && !timeout) exec();
    clear();
    if (!immediate) timeout = setTimeout(exec, delay);
  };
};
