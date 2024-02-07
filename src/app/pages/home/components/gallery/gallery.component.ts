import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class GalleryComponent implements OnInit {

  names = ['apartment', 'background', 'attraction', 'restaurant', 'teaser'];

  path = 'assets/images/';

  constructor(
  ) { }

  ngOnInit() {
  }

}
