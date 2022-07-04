import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealisationPage } from './realisation.page';

const routes: Routes = [
  {
    path: '',
    component: RealisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealisationPageRoutingModule {}
