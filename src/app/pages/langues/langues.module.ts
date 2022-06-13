import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguesPageRoutingModule } from './langues-routing.module';

import { LanguesPage } from './langues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguesPageRoutingModule
  ],
  declarations: [LanguesPage]
})
export class LanguesPageModule {}
