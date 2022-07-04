import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealisationPageRoutingModule } from './realisation-routing.module';

import { RealisationPage } from './realisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealisationPageRoutingModule
  ],
  declarations: [RealisationPage]
})
export class RealisationPageModule {}
