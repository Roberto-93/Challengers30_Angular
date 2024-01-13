import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  isRunning: boolean = false;

  ngOnInit(): void {
  }


  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      const source = interval(1000);
      this.subscription = source.subscribe(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      });
    }
  }
  

  pauseTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.isRunning = false;
  }

  resetTimer() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.pauseTimer();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
