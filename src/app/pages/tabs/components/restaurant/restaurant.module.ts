import { NgModule } from '@angular/core';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    RestaurantRoutingModule,
    CommonModule
  ],
})
export class RestaurantModule { }
