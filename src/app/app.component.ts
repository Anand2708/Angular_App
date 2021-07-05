import { Component } from '@angular/core';
import { LoginModel } from './auth/model/login.model';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  user: LoginModel;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(x => this.user = x);
    console.log(this.user);
  }
  logout() {
    this.authService.logout();
  }
}
