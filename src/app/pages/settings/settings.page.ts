import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonCardHeader,
  IonLabel,
  IonCheckbox,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonLabel,
    IonCardHeader,
    IonInput,
    IonItem,
    IonCardContent,
    IonCardSubtitle,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SettingsPage implements OnInit {
  settingsForm: FormGroup = this.formBuilder.group({
    animalMissing: [false, []],
    animalSick: [false, []],
    animalDeath: [false, []],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
