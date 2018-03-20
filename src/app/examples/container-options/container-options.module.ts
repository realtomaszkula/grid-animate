import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerOptionsRoutingModule } from './container-options-routing.module';
import { ContainerOptionsComponent } from './container-options.component';
import { GridAnimateModule } from '../../grid-animate/grid-animate.module';

@NgModule({
  imports: [CommonModule, ContainerOptionsRoutingModule, GridAnimateModule],
  declarations: [ContainerOptionsComponent],
})
export class ContainerOptionsModule {}
