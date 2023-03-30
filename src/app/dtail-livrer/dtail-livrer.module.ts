import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtailLivrerPageRoutingModule } from './dtail-livrer-routing.module';

import { DtailLivrerPage } from './dtail-livrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtailLivrerPageRoutingModule
  ],
  declarations: [DtailLivrerPage]
})
export class DtailLivrerPageModule {}
