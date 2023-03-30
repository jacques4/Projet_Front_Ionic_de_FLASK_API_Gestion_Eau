import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceuilPage } from './aceuil.page';

const routes: Routes = [
  {
    path: '',
    component: AceuilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceuilPageRoutingModule {}
