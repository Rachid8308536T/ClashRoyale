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
    private router : Router
    ){}

  ngOnInit(): void {
      this.router.events
      .subscribe((event: any) => {

        if (event instanceof NavigationStart) {
          
          if(event.url === "/Intro") {
            this.show = false;
          } else {
            this.show = true;
          }
        }
      })
  }
  
  

  
}


