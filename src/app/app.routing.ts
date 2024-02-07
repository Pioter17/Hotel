import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: ()=> import('@pages/home/home.routing')
  },
  // {
  //   path: '/authorization',
  //   loadChildren: ()=> import('@pages/auth/auth.routing')
  // }
] as Routes;
