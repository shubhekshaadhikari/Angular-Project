import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  isNavOpen = false;

    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  
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

  Login(event: Event) {
    event.preventDefault();
    this.router.navigate(['/login']); 
  }
}
