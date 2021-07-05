import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:6600/api/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

  token: string;

  login(login: LoginModel) {
    return this.http.post(this.authURL, login).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.token = response.token;
        this.router.navigate(['/home']);
      }

    })
  }
  logout() {
    this.token = '';
    this.router.navigate(['/'])
  }




}
