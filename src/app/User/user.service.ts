import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Users } from './Users.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dataURL = 'http://localhost:8080/Users';

  constructor(private http: HttpClient) { }

  // Créer un nouvel utilisateur avec une requête POST.
  createUser(users: Users): Observable<Users> {
    return this.http.post<Users>(this.dataURL, users);
  }
  // Récupérer un utilisateur spécifique par son ID avec une requête GET.
  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.dataURL}/${id}`);
  }
   // Récupérer tous les utilisateurs avec une requête GET.
   getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.dataURL);
  }
  // Supprimer un utilisateur par son ID avec une requête DELETE.
  deleteUserById(id: number): Observable<string> {
    const url = `${this.dataURL}/${id}`;
    return this.http.delete<string>(url);
  }
  // Mettre à jour une carte spécifique par son ID avec une requête PUT.
  updateUserById(id: number, users: Users): Observable<Users> {
    const url = `${this.dataURL}/${id}`;
    return this.http.put<Users>(url, users);
  }
}
