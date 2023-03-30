import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceuilPageRoutingModule } from './aceuil-routing.module';

import { AceuilPage } from './aceuil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceuilPageRoutingModule
  ],
  declarations: [AceuilPage]
})
export class AceuilPageModule {}
