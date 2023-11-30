import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  User!: boolean;
  imageUrlUser = '../assets/ressources/casque.png';
  urlUser = 'utilisateur';

  userRole!: string;

  Admin!: boolean;
  imageUrlAdmin = '../assets/ressources/Chef.png'; 
  urlAdmin = 'administrateur';
urlDuson ='../assets/ressources/Clash Royale Button.mp3'
  constructor(private router: Router) {}

  play() {
    const audio = new Audio(this.urlDuson);
    audio.play();
  }

  ngOnInit(): void {

    if(localStorage.getItem("user") === null){
      this.User = false;
    }

    if(localStorage.getItem("admin") === null){
      this.Admin = false;
    }
  
    if(localStorage.getItem("user")){
      this.User = true;
      this.userRole == "user";
    }

    if(localStorage.getItem("admin")){
      this.Admin = true;
      this.userRole =="admin"
    }
  }
   
  }
 
  
