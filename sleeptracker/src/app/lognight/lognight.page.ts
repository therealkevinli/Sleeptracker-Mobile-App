import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';

import { OvernightSleepData } from '../data/overnight-sleep-data';

import { ModalController } from '@ionic/angular';
import { InputNightPage } from './input-night/input-night.page';
import { FirebaseService } from '../services/firebase.service';



@Component({
  selector: 'app-lognight',
  templateUrl: './lognight.page.html',
  styleUrls: ['./lognight.page.scss'],
})
export class LognightPage implements OnInit {

  public currentLog: number;
  constructor(public service: SleepService,
    public liveService: FirebaseService,
    public modalController: ModalController) {
      this.liveService.countLength(false).subscribe( data => {
        this.currentLog = data.size;
      });
    }

  ngOnInit() {  }

  onClickLog() {
    console.log('click happen');
    this.modalController.create({
      component: InputNightPage,
      componentProps: { name: 'IN4MATX 133' }
    }).then((modal) => {
      modal.present();

      modal.onDidDismiss().then((data) => {
        if (typeof data.data !== 'string') {
          // this.service.logOvernightData(data.data);
          this.liveService.addSleepLog(data.data);
          this.liveService.countLength(false).subscribe( dat => {
            this.currentLog = dat.size;
          });
        }
      });
    });



  }
}
