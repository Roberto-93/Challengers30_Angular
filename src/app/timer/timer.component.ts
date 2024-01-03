import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  time: number = 0;
  isRunning: boolean = false;

  ngOnInit(): void {
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      const source = interval(1000);
      this.subscription = source.subscribe(val => this.time++);
    }
  }

  pauseTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.isRunning = false;
  }

  resetTimer() {
    this.time = 0;
    this.pauseTimer();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
