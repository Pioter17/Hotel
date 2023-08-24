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

  rooms: Apartments[];
  availableRooms: String[] = [];

  selectedRoom : string;
  maxPeople: number;

  // selectedArrivalDate: Date = new Date();
  // selectedDepartureDate: Date = new Date();

  ngOnInit() {
    this.rooms = this.apartments.getApartments();
    this.maxPeople = 1;
    this.rooms.forEach(room => {
      this.availableRooms.push(room.name);
    })
  }

  filterRooms(people: number) {
    this.availableRooms = [];
    this.rooms.forEach(room => {
      if(room.capacity >= people){
        this.availableRooms.push(room.name);
      }
    });
  }

  setNumberOfPeople() {
    this.rooms.forEach(room => {
      if(room.name == this.selectedRoom){
        this.maxPeople = room.capacity;
        this.filterRooms(this.maxPeople);
      }
    })
  }

}
