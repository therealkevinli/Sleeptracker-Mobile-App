import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LognightPage } from './lognight.page';
import { InputNightPage } from './input-night/input-night.page';

const routes: Routes = [
  {
    path: '',
    component: LognightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LognightPage, InputNightPage],
  entryComponents: [InputNightPage]
})
export class LognightPageModule {}
