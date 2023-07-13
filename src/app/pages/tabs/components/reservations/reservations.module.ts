import { NgModule } from '@angular/core';
import { ReservationsComponent } from './reservations.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { NbStepperModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    ReservationsRoutingModule,
    NbStepperModule,
    FormsModule,
  ],
})
export class ReservationsModule { }
