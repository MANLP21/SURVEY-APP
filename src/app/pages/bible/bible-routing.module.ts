import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiblePage } from './bible.page';

const routes: Routes = [
  {
    path: '',
    component: BiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblePageRoutingModule {}
