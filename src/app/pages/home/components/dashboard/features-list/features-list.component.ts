import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FeatureTeasersList } from '@pages/home/constants/feature-teasers.const';
import { FeatureTeaser } from '@pages/home/interfaces/dashboard.interface';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FeaturesListComponent implements OnInit {

  teasers : FeatureTeaser[];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
      this.teasers = FeatureTeasersList;
  }

  navigation(link: string): void {
    this.router.navigate([link]);
  }
}
