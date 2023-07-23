import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiblePageRoutingModule } from './bible-routing.module';

import { BiblePage } from './bible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblePageRoutingModule
  ],
  declarations: [BiblePage]
})
export class BiblePageModule {}
