import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile-service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, ProfileCard],
  template: `<pre>{{ data | json }}</pre>`,

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('itproger');

  profileService = inject(ProfileService)
  profiles: any = []

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val
      })
  }
}
