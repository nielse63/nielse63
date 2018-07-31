
const debounce = require('..');

describe('@nielse63/debounce', () => {
  it('is defined', () => {
    expect(debounce).toBeDefined();
  });

  it('should return a function', () => {
    const fn = jest.fn(() => true);
    const debounced = debounce(fn);
    expect(debounced).toBeInstanceOf(Function);
  });

  it('should call function', (done) => {
    let time = null;
    const fn = jest.fn(() => {
      time = Date.now();
    });
    const debounced = debounce(fn);
    const now = Date.now();
    debounced();
    setTimeout(() => {
      const diff = time - now;
      expect(fn).toBeCalled();
      expect(diff).toBeGreaterThanOrEqual(250);
      expect(diff).toBeLessThan(260);
      done();
    }, 500);
  });

  it('should run with setImmediate', (done) => {
    const fn = jest.fn(() => true);
    const debounced = debounce(fn, 250, true);
    debounced();
    setTimeout(() => {
      expect(fn).toBeCalled();
      done();
    }, 500);
  });
});
