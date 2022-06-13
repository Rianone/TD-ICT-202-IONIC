import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprimerPageRoutingModule } from './imprimer-routing.module';

import { ImprimerPage } from './imprimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprimerPageRoutingModule
  ],
  declarations: [ImprimerPage]
})
export class ImprimerPageModule {}
