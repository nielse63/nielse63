
const capitalize = require('..');

describe('@nielse63/capitalize', () => {
  it('is defined', () => {
    expect(capitalize).toBeDefined();
  });

  it('capitalizes string', () => {
    const output = capitalize('something to test');
    expect(output).toEqual('Something to test');
  });
});
