import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})


export class ProfileHeaderComponent {
  profileImage: string = 'assets/images/7.jpg';
  selectedImage: string | null = null;

  constructor(private router: Router) {}

  openImage() {
    this.selectedImage = this.profileImage;
  }

  closeImage() {
    this.selectedImage = null;
  }
  logout() {
  
  this.router.navigate(['/']);
}

}
