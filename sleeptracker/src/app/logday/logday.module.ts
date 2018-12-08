import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogdayPage } from './logday.page';
import { InputDayPage } from './input-day/input-day.page';

const routes: Routes = [
  {
    path: '',
    component: LogdayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogdayPage, InputDayPage],
  entryComponents: [InputDayPage]
})
export class LogdayPageModule {}
