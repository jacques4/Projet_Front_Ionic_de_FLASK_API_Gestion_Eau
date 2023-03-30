import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';

import { CommandePage } from './commande.page';

const routes: Routes = [
  {
    path: '',
    component: CommandePage ,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandePageRoutingModule {}
