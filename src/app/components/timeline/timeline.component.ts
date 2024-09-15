import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('confettiAnimation', [
      transition(':enter', [
        animate('3s ease-out', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-50vh) rotate(45deg)', offset: 0.5 }),
          style({ transform: 'translateY(-100vh)', opacity: 0, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class TimelineComponent implements OnInit, OnDestroy {
  targetDate = new Date('2024-09-17T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  confettis: { left: number, top: number, backgroundColor: string }[] = [];
  private confettiIntervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTimer();
    }
  }

  ngOnDestroy() {
    if (this.confettiIntervalId !== undefined) {
      clearInterval(this.confettiIntervalId);
    }
  }

  startConfettiAnimation() {
    this.confettiIntervalId = setInterval(() => {
      this.triggerConfetti();
    }, 500);
  }

  triggerConfetti() {
    const newConfettis = Array.from({ length: 20 }).map(() => ({
      left: this.random(0, window.innerWidth - 10),
      top: this.random(window.innerHeight, window.innerHeight + 100), // Começa de baixo
      backgroundColor: this.randomColor()
    }));
    this.confettis.push(...newConfettis);

    setTimeout(() => {
      this.confettis.splice(0, newConfettis.length);
    }, 3000);
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

      this.startConfettiAnimation();

      return;
    }

    this.days = Math.floor(totalSeconds / (60 * 60 * 24));
    this.hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    this.minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    this.seconds = Math.floor(totalSeconds % 60);

    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.updateTimer());
    }
  }
}
