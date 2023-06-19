import { delay } from './delay';

describe('delay', () => {
  it('should delay for the specified time', async () => {
    const start = Date.now();
    const delayTime = 500; // 1 second

    await delay(delayTime);

    const end = Date.now();
    const elapsed = end - start;

    expect(elapsed).toBeGreaterThanOrEqual(delayTime);
  });
});
