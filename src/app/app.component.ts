import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  show: boolean = true;

  constructor(
    public router : Router
    ){}

  ngOnInit(): void {
      this.router.events
      .subscribe((event: any) => {

        if (event instanceof NavigationStart) {
          if(event.url === "/intro" || event.url === "/administrateur" || event.url === "/connexion" || event.url === "/inscription" || event.url === "/redirection" || event.url === "/utilisateur" || event.url === "/") {
            this.show = false;
          } else {
            this.show = true;
          }
        }
      })
  }
}


