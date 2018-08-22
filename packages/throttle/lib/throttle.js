
module.exports = (callback, wait = 250) => {
  let throttling;
  return function fn(...argz) {
    if (throttling) return;

    const args = argz;
    const context = this;
    callback.apply(context, args);
    throttling = true;
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      throttling = false;
    }, wait);
  };
};
