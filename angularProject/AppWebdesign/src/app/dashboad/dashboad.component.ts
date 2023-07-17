import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  formData: any;
  constructor(private router: Router) {

  }

  ngOnInit(): void {

    const storedData = localStorage.getItem('profileData');
    if(storedData){
      this.formData = JSON.parse(storedData);
    }
    console.log('data',this.formData);
      
  }
  
  //open form page on click 
  Form(event: Event) {
    event.preventDefault();
    this.router.navigate(['/form']); 
  }

 

}

