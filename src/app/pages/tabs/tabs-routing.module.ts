import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: ()=> import('@pages/tabs/components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'apartments',
    loadChildren: ()=> import('@pages/tabs/components/apartments/apartments.module').then(m => m.ApartmentsModule),
  },
  {
    path: 'gallery',
    loadChildren: ()=> import('@pages/tabs/components/gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'reservations',
    loadChildren: ()=> import('@pages/tabs/components/reservations/reservations.module').then(m => m.ReservationsModule),
  },
  {
    path: 'attractions',
    loadChildren: ()=> import('@pages/tabs/components/attractions/attractions.module').then(m => m.AttractionsModule),
  },
  {
    path: 'restaurant',
    loadChildren: ()=> import('@pages/tabs/components/restaurant/restaurant.module').then(m => m.RestaurantModule),
  },
  {
    path: "**",
    loadChildren: ()=> import('@pages/tabs/components/home/home.module').then(m => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
