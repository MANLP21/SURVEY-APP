import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Survey forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    { title: 'Gallery', url: '/gallery', icon: 'image' },
    { title: 'Bible (John Chap III)', url: '/bible', icon: 'book' },
    { title: 'Profile', url: '/profile', icon: 'person' },
  ];
  constructor() {}
}
