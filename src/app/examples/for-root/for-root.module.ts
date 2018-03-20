import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridAnimateModule } from '../../grid-animate/grid-animate.module';
import { ForRootRoutingModule } from './for-root-routing.module';
import { ForRootComponent } from './for-root.component';

@NgModule({
  imports: [
    CommonModule,
    ForRootRoutingModule,
    GridAnimateModule.forRoot({
      timings: '400ms ease-in-out',
      containRatio: 1,
    }),
  ],
  declarations: [ForRootComponent],
})
export class ForRootModule {}
