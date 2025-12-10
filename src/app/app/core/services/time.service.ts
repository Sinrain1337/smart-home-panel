import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimeService implements OnDestroy {
  private currentTimeSubject = new BehaviorSubject<Date>(new Date());
  public readonly currentTime$ = this.currentTimeSubject.asObservable();

  private subscription: Subscription;

  constructor() {
    this.subscription = interval(1000).subscribe(() =>
      this.currentTimeSubject.next(new Date())
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('ru-RU', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}