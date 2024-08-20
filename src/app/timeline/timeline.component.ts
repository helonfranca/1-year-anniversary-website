import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  private animationFrameId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTimer();
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId !== undefined) {
      if (isPlatformBrowser(this.platformId) && typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(this.animationFrameId);
      } else {
        clearTimeout(this.animationFrameId);
      }
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

    if (isPlatformBrowser(this.platformId)) {
      this.animationFrameId = requestAnimationFrame(() => this.updateTimer());
    } else {
      this.animationFrameId = setTimeout(() => this.updateTimer(), 1000 / 60);
    }
  }

}
