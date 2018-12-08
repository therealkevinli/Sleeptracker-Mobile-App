import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputDayPage } from './input-day/input-day.page';

import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-logday',
  templateUrl: './logday.page.html',
  styleUrls: ['./logday.page.scss'],
})
export class LogdayPage implements OnInit {

  public currentLog: number;
  constructor(public service: SleepService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.currentLog = SleepService.AllSleepinessData.length;
  }

  onClickLog() {
    console.log('click happen');
    this.modalController.create({
      component: InputDayPage,
      componentProps: { name: 'IN4MATX 133' }
      }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        console.log(data);
        if (typeof data.data !== 'string') {
          this.service.logSleepinessData(data.data);
          this.currentLog = SleepService.AllSleepinessData.length;
        }
      });
      });
  }

}
