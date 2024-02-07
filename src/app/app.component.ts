import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ImageSliderComponent } from '@pages/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ImageSliderComponent,
    RouterModule,
    NbLayoutModule,
  ]
})
export class AppComponent {

}
