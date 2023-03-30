import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrerPage } from './livrer.page';

const routes: Routes = [
  {
    path: '',
    component: LivrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrerPageRoutingModule {}
