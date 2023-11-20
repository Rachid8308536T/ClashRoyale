import { Component } from '@angular/core';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent {
  username: string = ''; // type de propriété
  password: string = '';

  constructor() {
    // Initialiser des propriétés
    this.username = '';
    this.password = '';
  }

  // méthodes :
  toto() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}