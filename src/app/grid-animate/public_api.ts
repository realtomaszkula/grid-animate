import { InjectionToken } from '@angular/core';

export interface GridAnimateConfig {
  timings?: string;
  containRatio?: number;
}

export const GRID_ANIMATE_TIMINGS = new InjectionToken<string>(
  'gridAnimateTimings',
);

export const GRID_CONTAIN_RATIO = new InjectionToken<string>(
  'gridContainRatio',
);
