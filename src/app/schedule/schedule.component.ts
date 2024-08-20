import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  selectedPeriod: string | null = null;

  toggleDetails(period: string) {
    this.selectedPeriod = this.selectedPeriod === period ? null : period;
  }
}
