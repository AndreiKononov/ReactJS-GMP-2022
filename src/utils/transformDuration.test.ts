import { transformDuration } from './transformDuration';

describe('transformDuration', () => {
  it('should transform minutes to Xh Ymin format', () => {
    expect(transformDuration(90)).toBe('1h 30min');
  });

  it('should transform minutes to Xh Ymin format', () => {
    expect(transformDuration(60)).toBe('1h 0min');
  });
});
