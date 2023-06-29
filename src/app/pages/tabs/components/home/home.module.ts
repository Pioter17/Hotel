import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { FeaturesListComponent } from '@pages/tabs/components/home/features-list/features-list.component';
import { HomeRoutingModule } from "@pages/tabs/components/home/home-routing.module";
import { HomeComponent } from "@pages/tabs/components/home/home.component";

@NgModule({
  declarations:[
    HomeComponent,
    FeaturesListComponent
  ],
  imports:[
    HomeRoutingModule,
    CommonModule,
    MatExpansionModule
  ],
})

export class HomeModule { }
