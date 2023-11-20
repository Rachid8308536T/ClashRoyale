import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartesComponent } from './cartes/cartes.component';
import { DecksComponent } from './decks/decks.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { VideosComponent } from './videos/videos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RedirectionComponent } from './redirection/redirection.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'Intro', component: IntroComponent},
  { path: 'Accueil', component: AccueilComponent},
  { path: 'Cartes', component: CartesComponent},
  { path: 'Decks', component: DecksComponent},
  { path: 'Formulaire', component: FormulaireComponent},
  { path: 'Vidéos', component: VideosComponent},
  { path: 'Connexion', component: LoginComponent},
  { path: 'Inscription', component: RegisterComponent},
  { path: 'Redirection', component: RedirectionComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
