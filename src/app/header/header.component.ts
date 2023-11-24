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

  constructor(private router: Router) {}

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
 
  
