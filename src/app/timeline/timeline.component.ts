import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnDestroy {
  targetDate = new Date('2024-09-17T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private animationFrameId: number | undefined;

  ngOnInit() {
    this.updateTimer();
  }

  ngOnDestroy() {
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  updateTimer() {
    const now = new Date();
    const timeDiff = this.targetDate.getTime() - now.getTime();
    const totalSeconds = Math.floor(timeDiff / 1000);

    if (totalSeconds < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(totalSeconds / (60 * 60 * 24));
    this.hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    this.minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    this.seconds = Math.floor(totalSeconds % 60);

    this.animationFrameId = requestAnimationFrame(() => this.updateTimer());
  }
}
