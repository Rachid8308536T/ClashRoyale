import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';

  constructor() {
    // Initialiser des propriétés
    this.username = '';
    this.password = '';
  }

  // méthodes :
  login() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}
