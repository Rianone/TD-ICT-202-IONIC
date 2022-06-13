import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprimerPage } from './imprimer.page';

const routes: Routes = [
  {
    path: '',
    component: ImprimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprimerPageRoutingModule {}
