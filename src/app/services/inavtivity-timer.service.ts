import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InactivityTimerService {
  private inactivityTime: number = 600000; 
  private warningTime: number = 120000; 
  private lastActivityTime: number = Date.now();
  public warningTriggered: EventEmitter<boolean> = new EventEmitter<boolean>();
  private isBrowser: boolean;
  private intervalId: any = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.startListening();
    }
  }

  private startListening() {
    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('keydown', this.resetTimer.bind(this));
    this.startInactivityCheck(); // Start on initial load
  }

  public resetTimer() {
    this.lastActivityTime = Date.now();
  }

  private startInactivityCheck() {
    this.stopInactivityCheck(); 
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeDifference = currentTime - this.lastActivityTime;

      const publicRoutes = ['/login', '/register'];
      if (publicRoutes.includes(this.router.url)) return;

      if (timeDifference >= this.inactivityTime) {
        this.warningTriggered.emit(true);
      }

      if (timeDifference >= this.inactivityTime + this.warningTime) {
        this.logoutUser();
      }
    }, 1000);
  }

  public stopInactivityCheck() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public restartTimer() {
    this.resetTimer();
    this.startInactivityCheck();
  }

  public logoutUser() {
    this.stopInactivityCheck();
    alert('You have been logged out due to inactivity');
    this.router.navigate(['/']);
  }
}
