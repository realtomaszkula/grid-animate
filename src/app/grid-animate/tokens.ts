import { InjectionToken } from '@angular/core';

export const DEFAULT_TIMINGS = new InjectionToken<string>(
  'GridAnimateDefaultTimings',
);

export const DEFAULT_CONTAIN_RATIO = new InjectionToken<number>(
  'GridAnimateDefaultContainRatio',
);
