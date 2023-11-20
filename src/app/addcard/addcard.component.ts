import { Component, OnInit } from '@angular/core';
import { CartesService } from '../cartes/cartes.service';
import { Cartes } from '../cartes/cartes.module';

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

 
  createdCard!: Cartes;

  constructor(private cartesService: CartesService) {}

  // va convertir l'image en chaine de caractère et la stocker dans la variable image de l'objet viewCArd{}.
  imageSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.viewCarte.image = e.target.result as string;
        console.log( this.viewCarte.image);
      };

      reader.readAsDataURL(file);
    }
  }

  pushCard(): void {
    // Création d'une carte + récupération d'une carte (Backend)
    console.log( this.viewCarte.image);
    this.cartesService.createCard(this.viewCarte).subscribe((response) => {
      console.log( this.viewCarte.image);
      console.log('Carte créée avec succès:', response);
      this.createdCard = response;
      console.log( this.createdCard.image);
    });
  }


  ngOnInit(): void {
    console.log(this.viewCarte);
  }
}
