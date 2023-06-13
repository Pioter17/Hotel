import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel';
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
}
