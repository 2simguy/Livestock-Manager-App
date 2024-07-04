import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonText,
  IonCard,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  informationCircleOutline,
  pawOutline,
  personOutline,
  settingsOutline,
  squareOutline,
} from 'ionicons/icons';
import { routeData, routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonText,
    IonButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonTitle,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonMenuButton,
  ],
})
export class AppComponent implements OnInit {
  activeRouteData: routeData | undefined;
  sideMenuListOrderer = routes
    .filter((obj) => obj.data?.sideMenuOrder)
    .sort((obj) => obj.data?.sideMenuOrder || 100);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    addIcons({
      homeOutline,
      pawOutline,
      squareOutline,
      personOutline,
      settingsOutline,
      informationCircleOutline,
    });

    router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.activeRouteData = event.snapshot?.data as routeData;
      }
    });
  }

  async ngOnInit() {}
}
