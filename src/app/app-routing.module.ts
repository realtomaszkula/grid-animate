import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zero-config',
    pathMatch: 'full',
  },
  {
    path: 'zero-config',
    loadChildren: './examples/zero-config/zero-config.module#ZeroConfigModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
