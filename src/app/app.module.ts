import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DecksComponent } from './decks/decks.component';
import { CartesComponent } from './cartes/cartes.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ZonederechercheComponent } from './zonederecherche/zonederecherche.component';
import { IntroComponent } from './intro/intro.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { AddcardComponent } from './addcard/addcard.component';
import { SpaceUserComponent } from './space-user/space-user.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    FormulaireComponent,
    DecksComponent,
    CartesComponent,
    VideosComponent,
    LoginComponent,
    RegisterComponent,
    ZonederechercheComponent,
    IntroComponent,
    RedirectionComponent,
    AddcardComponent,
    SpaceUserComponent,
    PreviewComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
