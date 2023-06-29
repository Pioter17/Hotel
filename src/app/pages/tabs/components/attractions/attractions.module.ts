import { NgModule } from '@angular/core';
import { AttractionsComponent } from '@pages/tabs/components/attractions/attractions.component';
import { AttractionsRoutingModule } from '@pages/tabs/components/attractions/attractions-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AttractionsComponent
  ],
  imports: [
    AttractionsRoutingModule,
    CommonModule
  ],
})
export class AttractionsModule { }
