import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';

import { ModalController } from '@ionic/angular';
import { InputNightPage } from './input-night/input-night.page';



@Component({
  selector: 'app-lognight',
  templateUrl: './lognight.page.html',
  styleUrls: ['./lognight.page.scss'],
})
export class LognightPage implements OnInit {

  public currentLog: number;
  constructor(public service: SleepService, public modalController: ModalController) { }

  ngOnInit() {
    this.currentLog = SleepService.AllOvernightData.length;
  }

  onClickLog() {
    console.log('click happen');
    this.modalController.create({
      component: InputNightPage,
      componentProps: { name: 'IN4MATX 133' }
    }).then((modal) => {
      modal.present();

      modal.onDidDismiss().then((data) => {
        console.log(data);
        if (typeof data.data !== 'string') {
          this.service.logOvernightData(data.data);
          this.currentLog = SleepService.AllOvernightData.length;
        }
      });
    });



  }
}
