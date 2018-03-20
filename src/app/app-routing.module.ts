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
  {
    path: 'for-root',
    loadChildren: './examples/for-root/for-root.module#ForRootModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
