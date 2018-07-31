
const titlecase = require('..');

describe('@nielse63/titlecase', () => {
  it('is defined', () => {
    expect(titlecase).toBeDefined();
  });

  it('should convert case', () => {
    const output = titlecase('string to test');
    expect(output).toEqual('String To Test');
  });
});
