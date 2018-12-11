import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputDayPage } from './input-day/input-day.page';

import { SleepService } from '../services/sleep.service';
import { FirebaseService } from '../services/firebase.service';

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
    public liveService: FirebaseService,
    public modalController: ModalController) {
      this.liveService.countLength(true).subscribe( data => {
        this.currentLog = data.size;
      });
    }

  ngOnInit() {  }

  onClickLog() {
    console.log('click happen');
    this.modalController.create({
      component: InputDayPage,
      componentProps: { name: 'IN4MATX 133' }
      }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if (typeof data.data !== 'string') {
          this.liveService.addDayLog(data.data);
          this.service.logSleepinessData(data.data);
          this.liveService.countLength(true).subscribe( snap => {
            this.currentLog = snap.size;
          });
        }
      });
      });
  }

}
