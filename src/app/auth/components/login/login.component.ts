import { LoginModel } from './../../model/login.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    UserName:[,Validators.required],
    Password:['',Validators.required]
    })
  }
   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  onLogin(){
    this.submitted = true;
    if(this.loginForm.valid)
    {
      //this.router.navigate(['/home']);
      let data =new LoginModel(this.loginForm.value.UserName,this.loginForm.value.Password);
      this.authService.login(data);
    }
  
  }
}
