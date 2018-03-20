import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroConfigRoutingModule } from './zero-config-routing.module';
import { ZeroConfigComponent } from './zero-config.component';
import { GridAnimateModule } from '../grid-animate/grid-animate.module';

@NgModule({
  imports: [CommonModule, ZeroConfigRoutingModule, GridAnimateModule],
  declarations: [ZeroConfigComponent],
})
export class ZeroConfigModule {}
