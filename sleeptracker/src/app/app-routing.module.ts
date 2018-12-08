import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'logday', loadChildren: './logday/logday.module#LogdayPageModule' },
  { path: 'lognight', loadChildren: './lognight/lognight.module#LognightPageModule' },  { path: 'inputDay', loadChildren: './logday/input-day/input-day.module#InputDayPageModule' },
  { path: 'inputNight', loadChildren: './lognight/input-night/input-night.module#InputNightPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
