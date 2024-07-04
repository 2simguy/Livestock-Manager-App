import { Route, Routes } from '@angular/router';

export interface routeData {
  title: string;
}

interface routesExtended extends Route {
  data?: routeData;
}

export const routes: routesExtended[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    data: { title: 'Home' },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
    data: { title: 'Settings' },
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support.page').then((m) => m.SupportPage),
  },
  {
    path: 'live-stock',
    loadComponent: () =>
      import('./pages/live-stock/live-stock.page').then((m) => m.LiveStockPage),
  },
  {
    path: 'fields',
    loadComponent: () =>
      import('./pages/fields/fields.page').then((m) => m.FieldsPage),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
