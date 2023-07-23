import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(public photoService : PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
