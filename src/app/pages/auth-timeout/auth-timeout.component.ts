import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-timeout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-timeout.component.html',
  styleUrls: ['./auth-timeout.component.scss']
})
export class AuthTimeoutComponent {}
