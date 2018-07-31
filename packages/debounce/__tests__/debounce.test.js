
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
    const fn = jest.fn(() => true);
    const debounced = debounce(fn);
    debounced();
    setTimeout(() => {
      expect(fn).toBeCalled();
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
