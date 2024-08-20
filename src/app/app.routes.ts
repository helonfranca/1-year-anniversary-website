import { Routes } from '@angular/router';
import { RetrospectiveComponent } from './components/retrospective/retrospective.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'retrospective', component: RetrospectiveComponent},
  { path: 'ourDay', component: ScheduleComponent}
];
