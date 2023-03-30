import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtailLivrerPage } from './dtail-livrer.page';

const routes: Routes = [
  {
    path: '',
    component: DtailLivrerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtailLivrerPageRoutingModule {}
