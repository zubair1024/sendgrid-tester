import { isNumeric } from './isNumeric';

describe('isNumeric', () => {
  it('should return true for finite numbers', () => {
    expect(isNumeric(42)).toBe(true);
    expect(isNumeric(-10)).toBe(true);
    expect(isNumeric(3.14)).toBe(true);
  });

  it('should return true for strings representing finite numbers', () => {
    expect(isNumeric('42')).toBe(true);
    expect(isNumeric('-10')).toBe(true);
    expect(isNumeric('3.14')).toBe(true);
  });

  it('should return false for non-numeric values', () => {
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('')).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric({})).toBe(false);
    expect(isNumeric([])).toBe(false);
  });

  it('should return false for infinite numbers', () => {
    expect(isNumeric(Infinity)).toBe(false);
    expect(isNumeric(-Infinity)).toBe(false);
    expect(isNumeric(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isNumeric(Number.NEGATIVE_INFINITY)).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isNumeric(NaN)).toBe(false);
  });
});
