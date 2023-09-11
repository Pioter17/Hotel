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

  stayDateRange: { start: Date | null; end: Date | null };

  constructor(
    private apartments: ApartmentsService,
    // private fb: FormBuilder,
    ) {
    // this.dateRangeForm = this.fb.group({
    //   arrival: [null] // Tutaj inicjujemy formControl dla nb-datepicker
    // });
    this.stayDateRange = { start: null, end: null };
  }

  rooms: Apartments[];
  availableRooms: String[] = [];

  selectedRoom : string;
  maxPeople: number;
  stayDate: number;
  daysDifference: number;
  price: number;

  ngOnInit() {
    this.rooms = this.apartments.getApartments();
    this.maxPeople = 1;
    this.rooms.forEach(room => {
      this.availableRooms.push(room.name);
    })
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Wyzeruj godzinę, minuty, sekundy i milisekundy
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7); // Załóżmy, że to tydzień później
    oneWeekLater.setHours(0, 0, 0, 0); // Wyzeruj godzinę, minuty, sekundy i milisekundy
    this.stayDateRange = {
      start: today,
      end: oneWeekLater,
    };
    // this.price = this.apartments.getApartmentPrice(this.selectedRoom);
  }

  onDateRangeChange(event: any) {
    if (this.stayDateRange.start && this.stayDateRange.end) {
      const startDate = new Date(this.stayDateRange.start);
      const endDate = new Date(this.stayDateRange.end);

      // Różnica w milisekundach
      const timeDifference = endDate.getTime() - startDate.getTime();
      // Obliczenie liczby dni
      this.daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    }
  }

  filterRooms(people: number) {
    this.availableRooms = [];
    if(people >= 1){
      this.rooms.forEach(room => {
        if(room.capacity >= people){
          this.availableRooms.push(room.name);
        }
      });
    }

    if(!this.availableRooms.includes(this.selectedRoom)){
      this.selectedRoom = '';
    }
  }

  setNumberOfPeople() {
    this.rooms.forEach(room => {
      if(room.name == this.selectedRoom){
        this.maxPeople = room.capacity;
        this.filterRooms(this.maxPeople);
        this.price = this.apartments.getApartmentPrice(this.selectedRoom);
      }
    })
  }

}
