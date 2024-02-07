import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-tabs',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class HomeComponent implements OnInit {

  isPhone : boolean = false;
  windowWidth : number;

  title = 'Hotel';
  links = ['O nas', 'Pokoje', 'Atrakcje', 'Restauracja', 'Rezerwacje', 'Galeria', 'Konto'];
  routerLinks = ['dashboard', 'apartments', 'attractions', 'restaurant', 'reservations', 'gallery', 'account'];

  activeLink = this.links[0];

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
  this.windowWidth = window.innerWidth;
  if(this.windowWidth <= 768){
    this.isPhone = true;
  } else {
    this.isPhone = false;
  }
}

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if(this.windowWidth <= 768){
      this.isPhone = true;
    }

    window.addEventListener('scroll', () => {
      const navbar = this.document.querySelector('nav');
      const header : HTMLElement | null = this.document.querySelector('header');

      if (header && navbar) {
        const headerHeight = header.offsetHeight;

        if (window.scrollY >= headerHeight) {
          navbar.classList.add('nav__high');
        } else {
          navbar.classList.remove('nav__high');
        }
      }
    });
  }
}
