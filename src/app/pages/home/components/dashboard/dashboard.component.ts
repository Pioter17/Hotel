import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqElementsList } from '@pages/home/constants/faq.const';
import { FaqElement } from '@pages/home/interfaces/dashboard.interface';
import { FeaturesListComponent } from './features-list/features-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FeaturesListComponent,
    MatExpansionModule
  ]
})
export class DashboardComponent implements OnInit {

  faqElements: FaqElement[];

  constructor() { }

  ngOnInit() {
    this.faqElements = FaqElementsList;
  }
}
