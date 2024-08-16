import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SPACE_TRADERS_API_KEY_COOKIE_NAME } from '../constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,  
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  apiKey: string = '';
  remeberOnThisDevice: boolean = false;

  constructor(private router: Router) {}

  login(){
    console.log('logging in');
    console.log('api key: ' + this.apiKey);
    console.log('remeberOnThisDevice: ' + this.remeberOnThisDevice);
    this.saveApiKey();
    this.redirectToHome();
  }

  saveApiKey() {
    if(this.remeberOnThisDevice){
      localStorage.setItem(SPACE_TRADERS_API_KEY_COOKIE_NAME, this.apiKey);
    }
    else {
      sessionStorage.setItem(SPACE_TRADERS_API_KEY_COOKIE_NAME, this.apiKey);
    }
  }

  redirectToHome(){
    this.router.navigate(['/home']);
  }
}
