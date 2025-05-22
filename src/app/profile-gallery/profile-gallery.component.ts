import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridGalleryComponent} from '../instagram/grid-gallery/grid-gallery.component';
import {SidebarComponent} from '../instagram/sidebar/sidebar.component';
import {TabsComponent} from '../instagram/tabs/tabs.component';
import { ProfileHeaderComponent } from '../instagram/profile-header/profile-header.component';


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.scss'],
  imports: [CommonModule, GridGalleryComponent, TabsComponent, ProfileHeaderComponent],
})
export class ProfileGalleryComponent {
  photos = [
    'https://picsum.photos/id/1011/300/300',
    'https://picsum.photos/id/1012/300/300',
    'https://picsum.photos/id/1013/300/300',
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1016/300/300',
    'https://picsum.photos/id/1018/300/300',
    'https://picsum.photos/id/1020/300/300',
    'https://picsum.photos/id/1024/300/300',
    'https://picsum.photos/id/1027/300/300',
  ];
}
