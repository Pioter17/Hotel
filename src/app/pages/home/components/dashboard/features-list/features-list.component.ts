import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FeatureTeaser } from '@pages/home/interfaces/dashboard.interface';
import { FeatureTeaserListService } from '@pages/home/services/feature-teaser-list.service';

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
    private featureTeaser: FeatureTeaserListService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.teasers = this.featureTeaser.getAll();
  }

  navigation(link: string): void {
    this.router.navigate([link]);
  }
}
