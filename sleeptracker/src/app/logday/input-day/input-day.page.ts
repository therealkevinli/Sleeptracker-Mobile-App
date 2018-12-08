import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../../data/stanford-sleepiness-data';

@Component({
  selector: 'app-input-day',
  templateUrl: './input-day.page.html',
  styleUrls: ['./input-day.page.scss'],
})
export class InputDayPage implements OnInit {
  @Input() name: string;

  public degree = 1;
  public sentData: StanfordSleepinessData;
  constructor(public modalController: ModalController) { }

  dismiss() {
    // console.log(this.degree);
    this.modalController.dismiss('cancel');
  }

  sendData() {
    // console.log(this.degree);
    this.modalController.dismiss(new StanfordSleepinessData(this.degree));
  }
  ngOnInit() {
  }

  backNav() {
    this.modalController.dismiss('cancel');
  }

}
