import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '@pages/home/interfaces/attraction.interface';
import { AttractionsService } from '@pages/home/services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AttractionsComponent implements OnInit {

  attractions : Attraction[];

  constructor(
    private attractionService : AttractionsService
  ) { }

  ngOnInit() {
    this.attractions = this.attractionService.getAttractions();
  }

}
