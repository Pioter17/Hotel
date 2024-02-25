import { Routes } from '@angular/router';
import { PathRoutes } from '@core/constants/routes.const';

export default [
  {
    path: '',
    redirectTo: PathRoutes.HOME,
    pathMatch: "full"
  },
  {
    path: PathRoutes.HOME,
    loadChildren: ()=> import('@pages/home/home.routing')
  },
  {
    path: PathRoutes.AUTH,
    loadChildren: ()=> import('@pages/auth/auth.routing')
  }
] as Routes;
