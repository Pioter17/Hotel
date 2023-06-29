import { Component, OnInit } from '@angular/core';
import { Restaurant } from '@pages/tabs/interfaces/restaurant';
import { RestaurantService } from '@pages/tabs/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
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
