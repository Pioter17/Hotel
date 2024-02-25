import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { ImageSliderComponent } from '@shared/image-slider/image-slider.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ImageSliderComponent,
    RouterModule,
    NbLayoutModule,
    AngularFireAuthModule
  ]
})
export class AppComponent {

}
