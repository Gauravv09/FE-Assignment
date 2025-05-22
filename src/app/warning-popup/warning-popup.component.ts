import { Component, OnInit, OnDestroy } from '@angular/core';
import { InactivityTimerService } from '../services/inavtivity-timer.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class WarningPopupComponent implements OnInit, OnDestroy {
  showWarning = false;
  
  private warningSub!: Subscription;


  constructor(private inactivityTimerService: InactivityTimerService) {}

  ngOnInit() {
    this.warningSub = this.inactivityTimerService.warningTriggered.subscribe((shouldShow) => {
      this.showWarning = shouldShow;
      if (shouldShow) {
        setTimeout(() => {
          this.showWarning = false;
        }, 120000);
      }
    });
  }

  ngOnDestroy() {
    this.warningSub?.unsubscribe();
  }

  logout() {
    this.inactivityTimerService.logoutUser();
  }
}
