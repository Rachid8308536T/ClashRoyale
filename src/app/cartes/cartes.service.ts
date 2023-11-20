import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cartes } from './cartes.module';

@Injectable({
  providedIn: 'root',
})

export class CartesService {

  private dataURL = 'http://localhost:8080/Cards';

  constructor(private http: HttpClient) {}

  // Créer une nouvelle carte avec une requête POST.
  createCard(cartes: Cartes): Observable<Cartes> {
    return this.http.post<Cartes>(this.dataURL, cartes);
  }
  // Récupérer une carte spécifique par son ID avec une requête GET.
  getCardById(id: number): Observable<Cartes> {
    return this.http.get<Cartes>(`${this.dataURL}/${id}`);
  }
  // Récupérer toutes les cartes avec une requête GET.
  getAllCard(): Observable<Cartes[]> {
    return this.http.get<Cartes[]>(this.dataURL);
  }
  // Supprimer une carte par son ID avec une requête DELETE.
  deleteCardById(id: number): Observable<string> {
    const url = `${this.dataURL}/${id}`;
    return this.http.delete<string>(url);
  }
  // Mettre à jour une carte spécifique par son ID avec une requête PUT.
  updateCardById(id: number, cartes: Cartes): Observable<Cartes> {
    const url = `${this.dataURL}/${id}`;
    return this.http.put<Cartes>(url, cartes);
  }
}
