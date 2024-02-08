import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class ImageSliderComponent implements OnInit {

  imageFiles = ["background_img1.jpg", "background_img2.jpg", "background_img3.jpg", "background_img4.jpg"]
  currentIndex : number;
  currentImagePath : string;
  folderPath : string = "assets/images/";

  ngOnInit() {
    this.currentIndex = 0;
    this.currentImagePath = "";
    this.changeImage();
    setInterval(() => {
      this.changeImage();
    }, 5000);
  }

  changeImage() {
    this.currentImagePath = this.folderPath + this.imageFiles[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.imageFiles.length;
  }
}
