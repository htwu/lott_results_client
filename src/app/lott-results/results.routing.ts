import { Routes, RouterModule } from '@angular/router';

import { ResultListComponent } from './result-list.component';

const resultsRoutes: Routes = [
  {path: 'results', component: ResultListComponent},
];

export const routings = RouterModule.forChild(resultsRoutes);
