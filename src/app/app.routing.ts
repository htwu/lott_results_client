import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/results',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: false});
