import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-unavailable',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss']
})
export class ServiceUnavailableComponent {}
