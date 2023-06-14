import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  title = 'Hotel';
  links = ['O nas', 'Pokoje', 'Atrakcje', 'Restauracja', 'Rezerwacje', 'Galeria', 'Konto'];
  routerLinks = ['home', 'apartments', 'attractions', 'restaurant', 'reservations', 'gallery', 'account'];

  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
