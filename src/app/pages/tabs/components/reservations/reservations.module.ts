import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbStepperModule } from '@nebular/theme';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  declarations: [
    ReservationsComponent,
  ],
  imports: [
    ReservationsRoutingModule,
    NbStepperModule,
    FormsModule,
    CommonModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule
  ],
})
export class ReservationsModule { }
