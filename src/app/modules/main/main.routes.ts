import { Route } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PeopleComponent } from './main-page/people/people.component';
import { CarsComponent } from './main-page/cars/cars.component';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'people',
        component: PeopleComponent,
      },
      {
        path: 'cars',
        component: CarsComponent,
      },
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full',
      },
    ],
  },
];
