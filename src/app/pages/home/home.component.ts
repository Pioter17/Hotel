import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

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
      const navbar = document.querySelector('nav');
      const header : HTMLElement | null = document.querySelector('header');

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
