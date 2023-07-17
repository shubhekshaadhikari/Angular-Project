import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}
  
  //open form page on click 
  Form(event: Event) {
    event.preventDefault();
    this.router.navigate(['/form']); 
  }
  //open admin page on click
  Admin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/admin']); 
  }
}
