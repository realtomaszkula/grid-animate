import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerOptionsComponent } from './container-options.component';

const routes: Routes = [{ path: '', component: ContainerOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerOptionsRoutingModule {}
