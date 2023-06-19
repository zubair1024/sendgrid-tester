export function isNumeric(value: unknown): boolean {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return true;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const numericValue = Number(value);
    return !isNaN(numericValue) && Number.isFinite(numericValue);
  }

  return false;
}
