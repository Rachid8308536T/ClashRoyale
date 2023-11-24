import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-user',
  templateUrl: './space-user.component.html',
  styleUrls: ['./space-user.component.css'],
})
export class SpaceUserComponent implements OnInit {

  constructor(private router: Router) {}

  

  redirectToAccueil() {
    this.router.navigate(['/accueil']);
  }

  redirectToConnexion() {
    this.router.navigate(['/connexion']);
    localStorage.clear();
  }

  ngOnInit(): void {
  
  }
}
