import { Component, OnInit } from '@angular/core';
import { CartesService } from '../cartes/cartes.service';
import { Cartes } from '../cartes/cartes.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css'],
})
export class AddcardComponent implements OnInit {
 
  viewCarte: Cartes = {
    id: 0,
    name: '',
    image: '',
    type: '',
    rarete: '',
    elixir: 0,
    description: '',
  };
showCard = false;
  hidePreview = false;
  showButton = false;
  createdCard!: Cartes;

  constructor(private cartesService: CartesService, private router: Router) {}

  // va convertir l'image en chaine de caractère et la stocker dans la variable image de l'objet viewCArd{}.
  imageSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.viewCarte.image = e.target.result as string;
        console.log(this.viewCarte.image);
      };

      reader.readAsDataURL(file);
    }
  }

  pushCard(): void {
    // Création d'une carte + récupération d'une carte (Backend)
    console.log(this.viewCarte.image);
    this.cartesService.createCard(this.viewCarte).subscribe((response) => {
      console.log('LA REPONSE' + response);
      console.log(this.viewCarte.image);
      console.log('Carte créée avec succès:', response);
      this.createdCard = response;
      console.log(this.createdCard.image);
      return (this.viewCarte = {
        id: 0,
        name: '',
        image: '',
        type: '',
        rarete: '',
        elixir: 0,
        description: '',
      });
    });
  }

  deleteCard(): void {
    this.cartesService
      .deleteCardById(this.viewCarte.id)
      .subscribe((response) => {
        this.viewCarte = {
          id: 0,
          name: '',
          image: '',
          type: '',
          rarete: '',
          elixir: 0,
          description: '',
        };
        console.log('Carte supprimée avec succès :', response);
        (this.createdCard as any) = undefined; 
      });
  }
  

  Insideformsend() {
    this.showButton = true;
  }

  Outsideformsend() {
    this.showButton = false;
  }

  searchCard(): void {
    this.cartesService
      .getCardByName(this.viewCarte.name)
      .subscribe((reponse) => {
        this.createdCard = reponse;
        return (this.viewCarte = reponse);
      });
  }

  updateCard(): void {
    this.cartesService
      .updateCardById(this.viewCarte.id, this.viewCarte)
      .subscribe((response) => {
  
        return (this.viewCarte = {
          id: 0,
          name: '',
          image: '',
          type: '',
          rarete: '',
          elixir: 0,
          description: '',
        });
      });
  }
  redirectToAccueil() {
    this.router.navigate(['/accueil']);
  }

  redirectToConnexion() {
    this.router.navigate(['/connexion']);
    localStorage.clear();
  }


  ngOnInit(): void {
    console.log(this.viewCarte);
  }
}
