import { InjectionToken } from '@angular/core';

export interface GridAnimateConfig {
  timings?: string;
  containRatio?: number;
}

export const GRID_ANIMATE_TIMINGS = new InjectionToken<string>(
  'GridAnimateTimings',
);

export const GRID_CONTAIN_RATIO = new InjectionToken<number>(
  'GridContainRatio',
);
