import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'auth/login';
  public token: string;
  private userSubject: BehaviorSubject<LoginModel>;
  public user: Observable<LoginModel>;

  constructor(private http: HttpClient, private router: Router, private commonService: CommonService) {
    this.userSubject = new BehaviorSubject<LoginModel>(JSON.parse(sessionStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }


  public get userValue(): LoginModel {
    return this.userSubject.value;
  }
  // login(login: LoginModel) {
  //   return this.http.post(this.authURL, login).subscribe((response: any) => {
  //     console.log(response);
  //     if (response) {
  //       this.token = response.token;
  //       this.router.navigate(['/home']);
  //     }

  //   })
  // }

  login(login: LoginModel) {
    this.commonService.PostService(this.authURL, login, true).subscribe((response) => {
      if (response) {
        this.token = response.token;
        sessionStorage.setItem("user", JSON.stringify(response));
        this.userSubject.next(response);
        this.router.navigate(['/']);
      }
      else {
        console.error("Invalid UserName/Password");
      }

    })
  }

  logout() {
    this.token = '';
    sessionStorage.removeItem('user');
    //this.userSubject.next({});
    this.router.navigate(['/'])
  }




}
