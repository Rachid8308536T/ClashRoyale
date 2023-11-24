import { Component, OnInit } from '@angular/core';
import { Cartes } from './cartes.module';
import { CartesService } from '../cartes/cartes.service';

@Component({
  selector: 'app-cartes',
  templateUrl: './cartes.component.html',
  styleUrls: ['./cartes.component.css']
})
export class CartesComponent implements OnInit{


  cartesData: Cartes[] = []; // tableau de cartes
  limite: number = 5; // limite d'affichage des cartes
  constructor(private cartesService: CartesService) {}

  ngOnInit(): void {
    this.cartesService.getAllCard()
    .subscribe((reponse) => {
      console.log(reponse);
      
      return (this.cartesData = reponse);
    });
    
  }
}

