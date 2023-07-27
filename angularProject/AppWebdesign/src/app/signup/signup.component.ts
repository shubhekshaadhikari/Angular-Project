import { Component } from '@angular/core';
import  { Router } from '@angular/router'
import { AbstractControl, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export  class SignupComponent{
  signupForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
    fullname:['', [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    cpassword: ['', [Validators.required]],
    dob:['', [Validators.required]],
    //gender:['', [Validators.required]],
    city:['', [Validators.required]],
    bio:['', [Validators.required,Validators.minLength(20),Validators.maxLength(300)]],
  },{validator: this.passwordMatched});
  }

  passwordMatched(control: AbstractControl) {
    
    const password = control.value.password;
    const cpassword = control.value.cpassword;
    
    if ( password !== cpassword) {
      return { passwordMatch: false };
    }

    return null;
  }
 
  //On click login page
  Login(event: Event) {
    event.preventDefault();
    this.router.navigate(['/login']); 
  }
  
  onSubmit()
  { 

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      let data = localStorage.getItem('loginData'); 
      let userData;
      if (data) {
        userData = JSON.parse(data);
      } else {
        userData = [];
      }

      userData.push(this.signupForm.value);
      console.log("data", userData);

      var formDataJson = JSON.stringify(userData);
      console.log(formDataJson);

      localStorage.setItem('loginData',formDataJson);
      alert("Registration sucessful!!");
      this.router.navigate(['/login']); 
            
    } 
    else{
     console.log(this.signupForm)
      alert('Form invalid');
    }
  }
  
}

 


 

