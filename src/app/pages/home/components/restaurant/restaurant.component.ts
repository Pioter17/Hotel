import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantFeaturesList } from '@pages/home/constants/restaurant.const';
import { Restaurant } from '@pages/home/interfaces/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class RestaurantComponent implements OnInit {

  restaurant : Restaurant[];

  constructor() { }

  ngOnInit() {
    this.restaurant = RestaurantFeaturesList;
  }
}
