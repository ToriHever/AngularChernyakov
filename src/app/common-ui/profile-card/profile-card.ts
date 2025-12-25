import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interfaces';

@Component({
  selector: 'app-profile-card',
  imports: [],
  
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  @Input() profile!: Profile;
}
