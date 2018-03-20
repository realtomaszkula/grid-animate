import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  GridAnimateConfig,
  GRID_ANIMATE_TIMINGS,
  GRID_CONTAIN_RATIO,
} from './public_api';
import { GridContainerDirective } from './grid-container.directive';
import { GridTileDirective } from './grid-tile.directive';
import { GridAnimationService } from './grid-animation.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GridContainerDirective, GridTileDirective],
  exports: [GridContainerDirective, GridTileDirective],
  providers: [],
})
export class GridAnimateModule {
  static forRoot({
    timings,
    containRatio,
  }: GridAnimateConfig): ModuleWithProviders {
    return {
      ngModule: GridAnimateModule,
      providers: [
        { provide: GRID_ANIMATE_TIMINGS, useValue: timings },
        { provide: GRID_CONTAIN_RATIO, useValue: containRatio },
      ],
    };
  }
}
