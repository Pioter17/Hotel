import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApartmentsList } from '@pages/home/constants/apartments.const';
import { Apartments } from '@pages/home/interfaces/apartments';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartments[];

  constructor() { }

  ngOnInit() {
    this.apartments = ApartmentsList;
  }

}
