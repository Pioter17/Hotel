import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '@pages/home/interfaces/restaurant';
import { RestaurantService } from '@pages/home/services/restaurant.service';

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

  constructor(
    private restaurantService : RestaurantService
  ) { }

  ngOnInit() {
    this.restaurant = this.restaurantService.getRestaurantFeatures();
  }
}
