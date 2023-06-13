import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, ApartmentsComponent]
})
export class TabsModule { }
