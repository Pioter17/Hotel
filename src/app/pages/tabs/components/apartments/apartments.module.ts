import { NgModule } from '@angular/core';
import { ApartmentsComponent } from './apartments.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    ApartmentsComponent
  ],
  imports: [
    ApartmentsRoutingModule,
    CommonModule,
    MatButtonModule,
  ],
})
export class ApartmentsModule { }
