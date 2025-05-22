import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { WarningPopupComponent } from './warning-popup/warning-popup.component';
import { LoadingService } from './services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WarningPopupComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-form';
loading$: typeof this.loadingService.loading$;
showWarningPopup: boolean = false;

constructor(private loadingService: LoadingService, private router: Router) {
  this.loading$ = this.loadingService.loading$;
  this.router.events.subscribe(() => {
    // Adjust routes as per your app (e.g., add '/forgot-password' etc.)
    const publicRoutes = ['/', '/register'];
    this.showWarningPopup = !publicRoutes.includes(this.router.url);
  });
}
}
