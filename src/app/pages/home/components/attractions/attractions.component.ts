import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AttractionsList } from '@pages/home/constants/attractions.const';
import { Attraction } from '@pages/home/interfaces/attraction.interface';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AttractionsComponent implements OnInit {

  attractions : Attraction[];

  constructor() { }

  ngOnInit() {
    this.attractions = AttractionsList;
  }

}
