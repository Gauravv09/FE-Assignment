import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../instagram/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-layout">
      <app-sidebar></app-sidebar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}
