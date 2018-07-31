
const kebabcase = require('..');

describe('@nielse63/kebabcase', () => {
  it('is defined', () => {
    expect(kebabcase).toBeDefined();
  });

  it('should convert case', () => {
    const output = kebabcase('StringToTest');
    expect(output).toEqual('string-to-test');
  });
});
