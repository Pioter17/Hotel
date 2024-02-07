import { Component, OnInit } from '@angular/core';
import { FaqElement } from '@pages/home/interfaces/dashboard.interface';
import { FaqService } from '@pages/home/services/faq.service';
import { FeaturesListComponent } from './features-list/features-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

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

  constructor(
    private faqService : FaqService,
  ) { }

  ngOnInit() {
    this.faqElements = this.faqService.getFaqElements();
  }
}
