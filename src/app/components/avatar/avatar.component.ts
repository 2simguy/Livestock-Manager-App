import {
  IonAvatar,
  IonChip,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';

interface AvatarOptions {
  size: string;
  position: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  imports: [IonItem, IonLabel, IonChip, IonAvatar],
  standalone: true,
})
export class AvatarComponent implements OnInit {
  @Input() options: AvatarOptions = { size: '100px', position: 'middle' };
  constructor() {}

  ngOnInit() {}
}
