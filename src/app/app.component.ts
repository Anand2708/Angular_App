import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //token: any;

  constructor(private authService: AuthService) {
    //this.token = this.authService.token;
  }
  logout() {
    this.authService.logout();
  }
}
