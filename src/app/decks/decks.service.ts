import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Decks } from './decks.module';

@Injectable({
  providedIn: 'root'
})
export class DecksService {

  private dataURL = 'http://localhost:8080/Decks';

  constructor(private http: HttpClient) {}

  // Créer un nouveau deck avec une requête POST.
  createDeck(decks: Decks): Observable<Decks> {
    return this.http.post<Decks>(this.dataURL, decks);
  }
  // Récupérer un deck spécifique par son ID avec une requête GET.
  getDeckById(id: number): Observable<Decks> {
    return this.http.get<Decks>(`${this.dataURL}/${id}`);
  }
   // Récupérer tous les decks avec une requête GET.
   getAllDecks(): Observable<Decks[]> {
    return this.http.get<Decks[]>(this.dataURL);
  }
   // Supprimer un deck par son ID avec une requête DELETE.
   deleteDeckById(id: number): Observable<string> {
    const url = `${this.dataURL}/${id}`;
    return this.http.delete<string>(url);
  }
   // Mettre à jour un deck spécifique par son ID avec une requête PUT.
   updateDeckById(id: number, decks: Decks): Observable<Decks> {
    const url = `${this.dataURL}/${id}`;
    return this.http.put<Decks>(url, decks);
  }
}









