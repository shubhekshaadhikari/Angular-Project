
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isNavOpen = false;

    toggleNav() {
         this.isNavOpen = !this.isNavOpen;
    }
    
    constructor(private router: Router) {}

    Login(event: Event) {
      event.preventDefault();
      this.router.navigate(['/login']); 
    }

    Signup(event: Event) {
      event.preventDefault();
      this.router.navigate(['/signup']); 
    }
}