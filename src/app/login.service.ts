import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Users } from './User/Users.module';
import { userConnect } from './login/userConnect.module';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private dataURL = 'http://localhost:8080/Users';
  sharedData$: any;

  constructor(private http: HttpClient) { }

  signinUser(user: userConnect): Observable<any> {
    return this.http.post<any>("http://localhost:8080/Users/signin", user);

  }


}
