import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent {
  username: string = ''; // type de propriété
  password: string = '';

  constructor(private router: Router) {
    // Initialiser des propriétés
    this.username = '';
    this.password = '';
  }
  redirectToAccueil() {
    this.router.navigate(['/accueil']);
  }

  redirectToConnexion() {
    this.router.navigate(['/connexion']);
  }

  redirectToInscription() {
    this.router.navigate(['/inscription']);
  }
  // méthodes :
  toto() {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}