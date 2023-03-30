import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LivrerPageRoutingModule } from './livrer-routing.module';

import { LivrerPage } from './livrer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LivrerPage]
})
export class LivrerPageModule {}
