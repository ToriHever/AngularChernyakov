import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile-service';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interfaces';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  template: `<pre>{{ data | json }}</pre>`,

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val as Profile[]
      })
  }
}
