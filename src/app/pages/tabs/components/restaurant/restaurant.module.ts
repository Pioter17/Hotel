import { NgModule } from '@angular/core';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    RestaurantRoutingModule
  ],
})
export class RestaurantModule { }
