import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoisirsPage } from './loisirs.page';

const routes: Routes = [
  {
    path: '',
    component: LoisirsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoisirsPageRoutingModule {}
