import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apartments } from '@pages/home/interfaces/apartments';
import { ApartmentsService } from '@pages/home/services/apartments.service';
import { MatButtonModule } from '@angular/material/button'

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

  constructor(
    private apartmentsService: ApartmentsService,
  ) { }

  ngOnInit() {
    this.apartments = this.apartmentsService.getApartments();
  }

}
