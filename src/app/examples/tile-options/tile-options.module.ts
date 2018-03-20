import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileOptionsRoutingModule } from './tile-options-routing.module';
import { TileOptionsComponent } from './tile-options.component';
import { GridAnimateModule } from '../../grid-animate/grid-animate.module';

@NgModule({
  imports: [CommonModule, TileOptionsRoutingModule, GridAnimateModule],
  declarations: [TileOptionsComponent],
})
export class TileOptionsModule {}
