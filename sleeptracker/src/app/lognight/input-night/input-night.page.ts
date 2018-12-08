import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../../data/overnight-sleep-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input-night',
  templateUrl: './input-night.page.html',
  styleUrls: ['./input-night.page.scss'],
})
export class InputNightPage implements OnInit {
  // Create a modalController so you can return to the main app later

  public firsttime: Date;

  public starttime: Date;
  public startstring: string;
  public endtime: Date;
  public endstring: string;

  constructor(public modalController: ModalController, public alertController: AlertController) {
    this.firsttime = new Date((new Date()).toISOString().replace('Z', '+08:00'));
    this.startstring = this.firsttime.toISOString();
    this.endstring = this.firsttime.toISOString();
    console.log(this.startstring);
    console.log(this.endstring);

  }

  dismiss() {
    // call this function to return to the main app
    this.modalController.dismiss('cancel');

  }

  presentAlert() {
    this.alertController.create({
      message: 'You cannot sleep negative hours',
      header: 'Alert',
      buttons: ['OK']
    }).then((alert) => {
      alert.present();
    });
  }


  sendData() {
    this.firsttime = new Date();
    this.starttime = new Date(this.startstring);
    this.endtime = new Date(this.endstring);
    if (this.starttime > this.endtime) {
      // make an alert
      this.presentAlert();
    } else {
      this.modalController.dismiss(new OvernightSleepData(this.starttime, this.endtime));
    }

  }

  ngOnInit() {
  }

  backNav() {
    this.modalController.dismiss('cancel');
  }
}
