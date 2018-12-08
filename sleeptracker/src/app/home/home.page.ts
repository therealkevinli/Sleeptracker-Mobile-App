import { Component, ViewChild } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ActionSheetController } from '@ionic/angular';

import {List} from '@ionic/angular';


@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	@ViewChild('slidingList') slidingList: List;

	public palette = ['success', 'success', 'secondary', 'primary', 'tertiary', 'warning', 'danger'];

	public apps: string;
	public ifDelete = false;
	public currentLog: number = SleepService.AllOvernightData.length;
	constructor(public sleepService: SleepService, public actionSheet: ActionSheetController) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
		this.apps = 'Night';
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	get allSleepinessData() {
		return SleepService.AllSleepinessData;
	}

	get allOvernightData() {
		return SleepService.AllOvernightData;
	}

	onClickDay() {
		this.currentLog = SleepService.AllSleepinessData.length;
		console.log(this.apps + '+' + this.currentLog);
	}

	onClickNight() {
		this.currentLog = SleepService.AllOvernightData.length;
		console.log(this.apps + '+' + this.currentLog);
	}

	deleteNightData(item: any) {
		this.actionSheet.create({
			header: 'If delete the data',
			buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					this.ifDelete = true;
				}
			}, {
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		}).then((actionSheet) => {
			actionSheet.present();
			actionSheet.onDidDismiss().then(() => {
				if (this.ifDelete) {
					this.slidingList.closeSlidingItems();
					this.sleepService.deleteOvernightData(item);
					this.ifDelete = false;
				}
			})
		});

	}

	deleteDayData(item: any) {
		this.actionSheet.create({
			header: 'If delete the data',
			buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				handler: () => {
					this.ifDelete = true;
				}
			}, {
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		}).then((actionSheet) => {
			actionSheet.present();
			actionSheet.onDidDismiss().then(() => {
				if (this.ifDelete) {
					this.slidingList.closeSlidingItems();
					this.sleepService.deleteSleppinessData(item);
					this.ifDelete = false;
				}
			})
		});

	}
}
