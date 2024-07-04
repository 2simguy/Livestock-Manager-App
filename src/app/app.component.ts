import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationStart,
  Route,
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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {} from 'ionicons/icons';
import { routeData } from './app.routes';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    addIcons({});

    router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.activeRouteData = event.snapshot?.data as routeData;
      }
    });
  }

  async ngOnInit() {}
}
