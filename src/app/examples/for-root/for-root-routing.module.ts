import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForRootComponent } from './for-root.component';

const routes: Routes = [{ path: '', component: ForRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForRootRoutingModule {}
