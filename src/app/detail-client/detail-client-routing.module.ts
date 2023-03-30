import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';

import { DetailClientPage } from './detail-client.page';

const routes: Routes = [
  {
    path: '',
    component: DetailClientPage , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClientPageRoutingModule {}
