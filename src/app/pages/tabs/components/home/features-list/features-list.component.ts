import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureTeaser } from '@pages/tabs/interfaces/home-interfaces.interface';
import { FeatureTeaserListService } from '@pages/tabs/services/feature-teaser-list.service';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss']
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
