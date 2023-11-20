import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cartes } from './cartes.module';

@Component({
  selector: 'app-cartes',
  templateUrl: './cartes.component.html',
  styleUrls: ['./cartes.component.css']
})
export class CartesComponent implements OnInit{
  name = "";
  image = "";
  type = "";
  rarete = "";
  elixir = 0;
  description = "";
  apiData: Cartes[] = [];

  ngOnInit(): void {
    
  }
}
