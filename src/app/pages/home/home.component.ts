import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule]
})
export class HomeComponent {
   stories = [
  { username: 'alice', avatar: 'https://i.pravatar.cc/60?img=1' },
  { username: 'bob', avatar: 'https://i.pravatar.cc/60?img=2' },
  { username: 'carol', avatar: 'https://i.pravatar.cc/60?img=3' },
  { username: 'dave', avatar: 'https://i.pravatar.cc/60?img=4' },
  { username: 'eve', avatar: 'https://i.pravatar.cc/60?img=5' },
  { username: 'frank', avatar: 'https://i.pravatar.cc/60?img=6' },
 
  
];


  posts = [
  {
    username: 'alice',
    avatar: 'https://i.pravatar.cc/60?img=1',
    image: 'https://picsum.photos/seed/pic1/600/400',
    caption: 'Enjoying the view! 🌄'
  },
  {
    username: 'bob',
    avatar: 'https://i.pravatar.cc/60?img=2',
    image: 'https://picsum.photos/seed/pic2/600/400',
    caption: 'Weekend vibes 😎'
  },
  {
    username: 'carol',
    avatar: 'https://i.pravatar.cc/60?img=3',
    image: 'https://picsum.photos/seed/pic3/600/400',
    caption: 'Coffee break ☕'
  },
  {
    username: 'dave',
    avatar: 'https://i.pravatar.cc/60?img=4',
    image: 'https://picsum.photos/seed/pic4/600/400',
    caption: 'Throwback to the beach 🌊'
  },
  {
    username: 'eve',
    avatar: 'https://i.pravatar.cc/60?img=5',
    image: 'https://picsum.photos/seed/pic5/600/400',
    caption: 'New beginnings ✨'
  }
];


  suggestions = [
  { username: 'maybe_karan_', avatar: 'https://i.pravatar.cc/32?img=11' },
  { username: 'bhoomzzz29', avatar: 'https://i.pravatar.cc/32?img=12' },
  { username: 'prisha.gala', avatar: 'https://i.pravatar.cc/32?img=13' },
  { username: 'vaibhavi_k', avatar: 'https://i.pravatar.cc/32?img=14' },
  { username: 'cyber_fox', avatar: 'https://i.pravatar.cc/32?img=15' }
];

}
