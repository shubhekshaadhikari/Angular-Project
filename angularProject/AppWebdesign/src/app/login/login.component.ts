import { Component, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  control: any;
  loginForm: any;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required,Validators.minLength(8)]]
  });
  }
  
  //open signup page on click signup in footer
  Signup(event: Event) {
    event.preventDefault();
    this.router.navigate(['/signup']); 
  }
 
  onSubmit(): void
  { 
    if (this.loginForm.valid) {
      let email:string = this.loginForm.value.email;
      let password:string = this.loginForm.value.password;

      let data = localStorage.getItem("loginData"); 
      let userData;
      if(data){
        userData= JSON.parse(data);
      }else{
        userData=[];
      }
  
      console.log("userData",userData);
      let result!:boolean ;
      for (const user of userData) {
        if(user.email === email && user.password === password){
          result = true;
        }
      }
      if(result){
        alert('Login Successfull!!');
        this.router.navigate(['/admin']);
      }
      else{
        alert("Login Unsucessfull!!!\n Please try again");
      }
    }
  }
}