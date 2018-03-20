import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZeroConfigComponent } from './zero-config.component';

const routes: Routes = [{ path: '', component: ZeroConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZeroConfigRoutingModule {}
