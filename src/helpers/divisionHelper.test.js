import { sum } from "./division";


describe('sum function', () => {
  it('should correctly divide two numbers', () => {
    expect(sum(6, 2)).toBe(0);
    expect(sum(10, 5)).toBe(1);
  });

  it('should handle division by zero', () => {
    expect(sum(10, 0)).toBe(Infinity);
  });

  it('should handle negative numbers', () => {
    expect(sum(-10, 2)).toBe(-5);
  });
});