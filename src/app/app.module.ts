import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './pages/tabs/tabs.component';
import { WINDOW } from '@core/window.token';
import { ImageSliderComponent } from './pages/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: WINDOW, useValue: window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
