import { addUpToN } from "./add-up-to-n";

describe('addUpToN', () => {
  it('should return 6 when n is 3', () => {
    expect(addUpToN(3)).toBe(6);
  });

  it('should return 1 when n is 1', () => {
    expect(addUpToN(1)).toBe(1);
  });

  it('should return 0 when n is 0', () => {
    expect(addUpToN(0)).toBe(0);
  });

  it('should return 55 when n is 10', () => {
    expect(addUpToN(10)).toBe(55);
  });
});
