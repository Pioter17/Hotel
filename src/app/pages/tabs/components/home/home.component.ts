import { Component, OnInit } from '@angular/core';
import { FaqElement } from '@pages/tabs/interfaces/home-interfaces.interface';
import { FaqService } from '@pages/tabs/services/faq.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faqElements: FaqElement[];

  constructor(
    private faqService : FaqService,
  ) { }

  ngOnInit() {
    this.faqElements = this.faqService.getFaqElements();
  }
}
