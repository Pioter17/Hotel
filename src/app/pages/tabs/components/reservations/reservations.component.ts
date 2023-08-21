import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartments } from '@pages/tabs/interfaces/apartments';
import { ApartmentsService } from '@pages/tabs/services/apartments.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private apartments: ApartmentsService,
    private formBuilder: FormBuilder,
    ) {
    this.form = this.formBuilder.group({
      selectedDate: [null, Validators.required] // pole dla wybranej daty z walidacją
    });
  }

  rooms: Apartments[]

  selectedRoom : string;
  selectedArrivalDate: Date = new Date();
  selectedDepartureDate: Date = new Date();

  ngOnInit() {
    this.rooms = this.apartments.getApartments();
  }

}
