import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

export default [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: "full"
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: ()=> import('@pages/home/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'apartments',
        loadComponent: ()=> import('@pages/home/components/apartments/apartments.component').then(m => m.ApartmentsComponent),
      },
      {
        path: 'gallery',
        loadComponent: ()=> import('@pages/home/components/gallery/gallery.component').then(m => m.GalleryComponent),
      },
      {
        path: 'reservations',
        loadComponent: ()=> import('@pages/home/components/reservations/reservations.component').then(m => m.ReservationsComponent),
      },
      {
        path: 'attractions',
        loadComponent: ()=> import('@pages/home/components/attractions/attractions.component').then(m => m.AttractionsComponent),
      },
      {
        path: 'restaurant',
        loadComponent: ()=> import('@pages/home/components/restaurant/restaurant.component').then(m => m.RestaurantComponent),
      },
      {
        path: 'account',
        loadComponent: ()=> import('@pages/home/components/account/account.component').then(m => m.AccountComponent),
      },
      {
        path: "**",
        loadComponent: ()=> import('@pages/home/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      }
    ]
  }
] as Routes;
