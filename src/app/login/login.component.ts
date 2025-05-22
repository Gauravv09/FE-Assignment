import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { InactivityTimerService } from '../services/inavtivity-timer.service';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private inactivityTimerService: InactivityTimerService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login();
      alert('Login successful!');
      this.inactivityTimerService.restartTimer(); 
      this.router.navigate(['/gallery']); 
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

   simulate401() {
    this.http.get('https://httpstat.us/401').subscribe({
      next: res => console.log('Success:', res),
      error: err => console.error('Caught by component:', err)
    });
  }

  simulate503() {
    this.http.get('https://httpstat.us/503').subscribe({
      next: res => console.log('Success:', res),
      error: err => console.error('Caught by component:', err)
    });
}
}
