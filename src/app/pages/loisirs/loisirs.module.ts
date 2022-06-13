import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoisirsPageRoutingModule } from './loisirs-routing.module';

import { LoisirsPage } from './loisirs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoisirsPageRoutingModule
  ],
  declarations: [LoisirsPage]
})
export class LoisirsPageModule {}
