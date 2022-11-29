import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joakim';

  userData = {
    email: 'joakim@gmail.com',
    role: 'Admin',
  }

  title = 'angular13';
}
