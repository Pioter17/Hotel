import { Component, OnInit } from '@angular/core';
import { Apartments } from '@pages/tabs/interfaces/apartments';
import { ApartmentsService } from '@pages/tabs/services/apartments.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
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
