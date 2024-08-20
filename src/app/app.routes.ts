import { Routes } from '@angular/router';
import { RetrospectiveComponent } from './retrospective/retrospective.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'retrospective', component: RetrospectiveComponent},
  { path: 'ourDay', component: ScheduleComponent}
];
