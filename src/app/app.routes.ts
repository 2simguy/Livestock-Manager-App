import { Route, Routes } from '@angular/router';

export interface routeData {
  title: string;
  sideMenuOrder: number;
  icon: string;
}

interface routesExtended extends Route {
  data?: routeData;
}

export const routes: routesExtended[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
    data: { title: 'Home', sideMenuOrder: 1, icon: 'home-outline' },
  },
  {
    path: 'live-stock',
    loadComponent: () =>
      import('./pages/live-stock/live-stock.page').then((m) => m.LiveStockPage),
    data: { title: 'Live stock', sideMenuOrder: 2, icon: 'paw-outline' },
  },
  {
    path: 'fields',
    loadComponent: () =>
      import('./pages/fields/fields.page').then((m) => m.FieldsPage),
    data: { title: 'Fields', sideMenuOrder: 3, icon: 'square-outline' },
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then((m) => m.ProfilePage),
    data: { title: 'Profile', sideMenuOrder: 4, icon: 'person-outline' },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
    data: { title: 'Settings', sideMenuOrder: 5, icon: 'settings-outline' },
  },

  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support.page').then((m) => m.SupportPage),
    data: {
      title: 'Support',
      sideMenuOrder: 6,
      icon: 'information-circle-outline',
    },
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
