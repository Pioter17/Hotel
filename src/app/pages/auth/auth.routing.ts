import { Routes } from '@angular/router';
import { PathRoutes } from '@core/constants/routes.const';
import { AuthComponent } from '@pages/auth/auth.component';
import { HomeComponent } from '@pages/home/home.component';

export default [
  {
    path: '',
    redirectTo: PathRoutes.LOGIN,
    pathMatch: "full"
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: PathRoutes.DASHBOARD,
        loadComponent: ()=> import('@pages/home/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: PathRoutes.APARTMENTS,
        loadComponent: ()=> import('@pages/home/components/apartments/apartments.component').then(m => m.ApartmentsComponent),
      },
      {
        path: PathRoutes.GALLERY,
        loadComponent: ()=> import('@pages/home/components/gallery/gallery.component').then(m => m.GalleryComponent),
      },
      {
        path: PathRoutes.RESERVATIONS,
        loadComponent: ()=> import('@pages/home/components/reservations/reservations.component').then(m => m.ReservationsComponent),
      },
      {
        path: PathRoutes.ATTRACTIONS,
        loadComponent: ()=> import('@pages/home/components/attractions/attractions.component').then(m => m.AttractionsComponent),
      },
      {
        path: PathRoutes.RESTAURANT,
        loadComponent: ()=> import('@pages/home/components/restaurant/restaurant.component').then(m => m.RestaurantComponent),
      },
      {
        path: PathRoutes.ACCOUNT,
        loadComponent: ()=> import('@pages/home/components/account/account.component').then(m => m.AccountComponent),
      },
      {
        path: "**",
        loadComponent: ()=> import('@pages/home/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
      }
    ]
  }
] as Routes;
