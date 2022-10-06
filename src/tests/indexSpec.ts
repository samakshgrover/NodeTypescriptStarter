import add from '../index';

describe('sample testing', () => {
  it('add function testing --pass', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('add function testing --fail', () => {
    expect(add(2, 3)).toBe(6);
  });
});
