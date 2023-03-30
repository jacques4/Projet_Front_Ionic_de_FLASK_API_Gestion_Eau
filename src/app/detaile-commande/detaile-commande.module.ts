import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaileCommandePageRoutingModule } from './detaile-commande-routing.module';

import { DetaileCommandePage } from './detaile-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaileCommandePageRoutingModule
  ],
  declarations: [DetaileCommandePage]
})
export class DetaileCommandePageModule {}
