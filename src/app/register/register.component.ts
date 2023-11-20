import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  nom: string = '';
  prenom: string = '';
  username: string = '';
  password: string | number = '';

  constructor() {
    this.email = '';
    this.nom = '';
    this.prenom = '';
    this.username = '';
    this.password = '';
  }

  register() {
    console.log('Email: ' + this.email);
    console.log('Nom: ' + this.nom);
    console.log('Prenom: ' + this.prenom);
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}
