import { Component, OnInit } from '@angular/core';
import { Attraction } from '@pages/tabs/interfaces/attraction.interface';
import { AttractionsService } from '@pages/tabs/services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
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
