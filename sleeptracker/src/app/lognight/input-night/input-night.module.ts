import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InputNightPage } from './input-night.page';

const routes: Routes = [
  {
    path: '',
    component: InputNightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InputNightPage]
})
export class InputNightPageModule {}


// import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';
// @Component({
//   selector: 'modal-example',
//   templateUrl: 'modal-example.html',
//   styleUrls: ['./modal-example.css']
// })
// export class ModalExample {
//   constructor(public modalController: ModalController) {}

//   async presentModal() {
//     const modal = await this.modalController.create({
//       component: ModalPage,
//       componentProps: { value: 123 }
//     });
//     return await modal.present();
//   }
