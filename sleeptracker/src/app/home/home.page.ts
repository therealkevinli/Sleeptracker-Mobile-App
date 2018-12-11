import { Component, ViewChild } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ActionSheetController } from '@ionic/angular';

import { List } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3/instructions';


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
	public currentLogs: Observable<any>;

	constructor(public sleepService: SleepService,
		public liveService: FirebaseService,
		public actionSheet: ActionSheetController) { }

	ngOnInit() {
		// console.log(this.allSleepData);
		this.apps = 'Night';
		this.onClickNight();
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
		this.currentLogs = this.liveService.getDayData().pipe(map(array =>
			// return array.reverse();
			array.reverse().map(ele => {
				return new StanfordSleepinessData(ele.scale,
					new Date(ele.logAt.seconds * 1000),
					ele.id);
			})
		));
		// console.log(this.currentLogs);
	}

	onClickNight() {
		// this.currentLogs = this.liveService.getNightData();

		this.currentLogs = this.liveService.getNightData().pipe(map(array =>
			// return array.reverse();
			array.reverse().map(ele => {
				return new OvernightSleepData(new Date(ele.start.seconds * 1000),
					new Date(ele.end.seconds * 1000),
					ele.id);
			})
		));
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
					this.liveService.deleteNightData(item.id);
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
					this.liveService.deleteDayData(item.id);
					this.ifDelete = false;
				}
			})
		});

	}
}
