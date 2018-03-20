import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TileOptionsComponent } from './tile-options.component';

const routes: Routes = [{ path: '', component: TileOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TileOptionsRoutingModule {}
