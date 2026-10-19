import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(m => m.Home),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home').then(m => m.Home),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./features/about/about').then(m => m.About),
      },
      {
        path: 'youth-skills-programs',
        loadComponent: () =>
          import('./features/programs/programs').then(m => m.Programs),
      },
      {
        path: 'ksg-iyic-hub-youth-spaces',
        loadComponent: () =>
          import('./features/spaces/spaces').then(m => m.Spaces),
      },
      {
        path: 'ksg-iyic-gallery',
        loadComponent: () =>
          import('./features/gallery/gallery').then(m => m.Gallery),
      },
      {
        path: 'become-a-volunteer',
        loadComponent: () =>
          import('./features/volunteer/volunteer').then(m => m.Volunteer),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./features/contact/contact').then(m => m.Contact),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];