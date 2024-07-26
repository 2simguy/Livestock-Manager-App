import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonCard,
} from '@ionic/angular/standalone';
import { AvatarComponent } from '@components/avatar/avatar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonInput,
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    AvatarComponent,
  ],
})
export class ProfilePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
