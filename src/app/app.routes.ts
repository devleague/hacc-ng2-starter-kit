import { Routes, RouterModule } from '@angular/router';
import { FarmersMarketListComponent } from './farmers-markets';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',     component: FarmersMarketListComponent },
  { path: '**',    component: NoContent }
];
