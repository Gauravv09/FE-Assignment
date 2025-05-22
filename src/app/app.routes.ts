import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent),
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./reactiveform/reactiveform.component').then(m => m.ReactiveformComponent),
    pathMatch: 'full'
  },
  {
    path: 'auth-timeout',
    loadComponent: () =>
      import('./pages/auth-timeout/auth-timeout.component').then(m => m.AuthTimeoutComponent),
    
  },
  {
    path: 'service-unavailable',
    loadComponent: () =>
      import('./pages/service-unavailable/service-unavailable.component').then(m => m.ServiceUnavailableComponent),
    
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./profile-gallery/profile-gallery.component').then(m => m.ProfileGalleryComponent),
      canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [AuthGuard]
  }
];
