import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})

export class BiblePage implements OnInit {

  verses: any[] = [];

  constructor() {
    this.getVerses();
  }

  ngOnInit() {
  }

  getVerses() {
    const apiURL = 'https://bible-api.com/john%203';

    axios.get(apiURL)
      .then(response => {
        this.verses = response.data.verses;
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des versets:', error);
      });
  }
}
  

