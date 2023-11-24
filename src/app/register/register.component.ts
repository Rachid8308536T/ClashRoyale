import { Component, OnInit } from '@angular/core';
import { Users } from '../User/Users.module';
import { UsersService } from '../User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  newUser: Users = {
    id: 0,
    pseudonyme: '',
    mail: '',
    password: '',
    role: 'user',
    deck: []
  };
  loggedIn: boolean = true;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
  }
  register(): void {
    this.userService.createUser(this.newUser).subscribe((response) => {
      console.log(response);
   
      if (response.role === 'user') {
        this.router.navigate(['/utilisateur']);

        this.loggedIn = true;
        localStorage.setItem('user', response.role);
        localStorage.setItem('loggedInStatus', JSON.stringify(true)); 

      } else if (response.role === 'admin') {
        this.router.navigate(['/administrateur']);

        this.loggedIn = true;
        localStorage.setItem('admin', response.role);
        localStorage.setItem('loggedInStatus', JSON.stringify(true)); 
      }
    });
  }
  


}










