import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-gallery',
  standalone: true,
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.scss'],
  imports: [CommonModule]
})
export class GridGalleryComponent {
  images: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.webp',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.webp',
    'assets/images/6.jpg'
  ];

  selectedImage: string | null = null;

  likedImages: { [key: string]: boolean } = {}; // key is image path

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

  toggleLike(event: Event) {
    event.stopPropagation(); // to prevent modal close

    if (this.selectedImage) {
      const currentStatus = this.likedImages[this.selectedImage] || false;
      this.likedImages[this.selectedImage] = !currentStatus;

      // Trigger animation
      const btn = event.currentTarget as HTMLElement;
      btn.classList.remove('liked');
      void btn.offsetWidth;
      btn.classList.add('liked');
    }
  }

  isImageLiked(): boolean {
    return !!this.selectedImage && this.likedImages[this.selectedImage];
  }
}
