import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  ClashRoyaleMusic = "../assets/ressources/Clash Royale Music.mp3";

  constructor() {}

  ngOnInit(): void {
    this.playMusic();
  }

  playMusic() {
    const audio = new Audio();
    audio.src = this.ClashRoyaleMusic;
    audio.load();
    audio.play();
    audio.loop = true;
  }

}
