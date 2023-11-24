import { Component, OnInit } from '@angular/core';
import { CartesService } from '../cartes/cartes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartes } from '../cartes/cartes.module';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit  {
  constructor(
    public cartesService: CartesService, 
    private route: ActivatedRoute, 
    private router: Router ) {}

    viewCarte: Cartes = {
      id: 0,
      name: '',
      image: '',
      type: '',
      rarete: '',
      elixir: 0,
      description: '',
    };

    carteId: number = 0;

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const id = params['id'];
        this.carteId = id;
    
        this.cartesService.getCardById(id)
          .subscribe((data: Cartes) => {
            console.log( this.viewCarte);
            this.viewCarte = data;
            console.log(data);
          });
      });
    }
  }
