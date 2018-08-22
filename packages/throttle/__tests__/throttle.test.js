
const throttle = require('..');

describe('@nielse63/throttle', () => {
  it('should exist', () => {
    expect(throttle).toBeDefined();
  });

  it('should return a function', () => {
    const fn = jest.fn(() => true);
    const throttled = throttle(fn);
    expect(throttled).toBeInstanceOf(Function);
  });

  it('should call function immediately', (done) => {
    let time = null;
    const now = Date.now();
    const fn = jest.fn(() => {
      time = Date.now();
    });
    const throttled = throttle(fn);
    throttled();
    setTimeout(() => {
      const diff = time - now;
      expect(fn).toBeCalled();
      expect(diff).toBeLessThan(10);
      done();
    }, 300);
  });

  it('should throttle execution', (done) => {
    let count = 0;
    const fn = jest.fn(() => {
      console.log(Date.now());
    });
    const throttled = throttle(fn);
    const interval = setInterval(() => {
      throttled();
      count += 1;
      if (count > 3) {
        clearInterval(interval);
        done();
      }
    }, 15);
  });
});
