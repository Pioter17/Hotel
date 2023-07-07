import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '@core/window.token';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  isPhone : boolean = false;
  windowWidth : number;

  title = 'Hotel';
  links = ['O nas', 'Pokoje', 'Atrakcje', 'Restauracja', 'Rezerwacje', 'Galeria', 'Konto'];
  routerLinks = ['home', 'apartments', 'attractions', 'restaurant', 'reservations', 'gallery', 'account'];

  activeLink = this.links[0];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
  this.windowWidth = this.window.innerWidth;
  if(this.windowWidth <= 768){
    this.isPhone = true;
  } else {
    this.isPhone = false;
  }
  // Dodaj tutaj logikę reakcji na zmianę szerokości okna
}

  ngOnInit() {
    this.windowWidth = this.window.innerWidth;
    if(this.windowWidth <= 768){
      this.isPhone = true;
    }

    this.window.addEventListener('scroll', () => {
      const navbar = this.document.querySelector('nav');
      const header : HTMLElement | null = this.document.querySelector('header');

      if (header && navbar) {
        const headerHeight = header.offsetHeight;

        if (this.window.scrollY >= headerHeight) {
          navbar.classList.add('nav__high');
        } else {
          navbar.classList.remove('nav__high');
        }
      }
    });
  }

}
