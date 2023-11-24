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
import { AddcardComponent } from './addcard/addcard.component';
import { SpaceUserComponent } from './space-user/space-user.component';
import { AuthGuard } from './auth.guard';
import { PreviewComponent } from './preview/preview.component';



const routes: Routes = [
  { path: '', redirectTo: "intro", pathMatch: "full" },
  { path: 'intro', component: IntroComponent},
  { path: 'accueil', component: AccueilComponent },
  { path: 'cartes', component: CartesComponent, canActivate: [AuthGuard]},
  { path: 'decks', component: DecksComponent, canActivate: [AuthGuard]}, 
  { path: 'formulaire', component: FormulaireComponent},
  { path: 'vidéos', component: VideosComponent, canActivate: [AuthGuard]},
  { path: 'connexion', component: LoginComponent},
  { path: 'inscription', component: RegisterComponent},
  { path: 'redirection', component: RedirectionComponent},
  { path: 'administrateur', component: AddcardComponent},
  { path: 'utilisateur', component: SpaceUserComponent},
  { path: 'preview/:id', component: PreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
