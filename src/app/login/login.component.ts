import { Component, OnInit } from '@angular/core';
import { userConnect } from './userConnect.module';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: userConnect = {
    pseudonyme: '',
    password: '',
  };
  loggedIn: boolean = false;

  blaze: string = '';
  reponse: any;

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.signinUser(this.user).subscribe((reponse) => {
      console.log(reponse);
      console.log(reponse.message);

      localStorage.setItem('pseudonyme', JSON.stringify(this.blaze));

      if (reponse.role === 'user') {
        this.router.navigate(['/utilisateur']);
        localStorage.setItem('user', reponse.role);

        this.loggedIn = true;
        localStorage.setItem('loggedInStatus', JSON.stringify(true));
        console.log(this.loggedIn);
      } else if (reponse.role === 'admin') {
        localStorage.removeItem('user');
        this.router.navigate(['/administrateur']);
        localStorage.setItem('admin', reponse.role);

        this.loggedIn = true;
        localStorage.setItem('loggedInStatus', JSON.stringify(true));
        console.log(this.loggedIn);
      }
    });
  }

  ngOnInit(): void {}
}
