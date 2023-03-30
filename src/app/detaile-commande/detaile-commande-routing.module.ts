import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';

import { DetaileCommandePage } from './detaile-commande.page';

const routes: Routes = [
  {
    path: '',
    component: DetaileCommandePage , canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaileCommandePageRoutingModule {}
