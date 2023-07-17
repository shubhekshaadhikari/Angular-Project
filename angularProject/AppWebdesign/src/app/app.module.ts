import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { DashboadComponent } from './dashboad/dashboad.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    SidebarComponent,
    
    SignupComponent,
    LoginComponent,
    
    DashboadComponent,
    FormComponent,
    ValidationComponent,
    HighlightDirective,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
