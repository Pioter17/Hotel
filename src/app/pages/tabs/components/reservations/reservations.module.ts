import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations.component';
import { ReservationsRoutingModule } from './reservations-routing.module';

@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    ReservationsRoutingModule
  ],
})
export class ReservationsModule { }
