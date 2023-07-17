import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      img:[''],
      role:[''],
      country:[''],
      time:[''],
      bio:[''],
      file:['']
    });
  }

  onSubmit(){
    console.log(this.form.value);
      let data = localStorage.getItem('profileData'); 
      let userData;
      if (data) {
        userData = JSON.parse(data);
      } else {
        userData = [];
      }

      userData.push(this.form.value);
      console.log("data", userData);

      var formDataJson = JSON.stringify(userData);
      console.log(formDataJson);

      localStorage.setItem('profileData',formDataJson);
      alert("Data Added in table");
      //this.router.navigate(['/login']); 
  }
 
}
