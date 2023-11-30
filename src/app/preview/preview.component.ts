import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CartesService } from '../cartes/cartes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartes } from '../cartes/cartes.module';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  previewCarte: Cartes = {
    id: 0,
    name: '',
    image: '',
    type: '',
    rarete: '',
    elixir: 0,
    description: '',
  };

  goldColor = 'gold-color';
  blueColor = 'blue-color';
  purpleColor = 'purple-color';

  constructor(
    private cartesService: CartesService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);

      this.cartesService.getCardById(id).subscribe((reponse) => {
        this.previewCarte = reponse;
        console.log(reponse);

        this.votreMethodePourChangerLaCouleur();
      });
    });
  }
  redirectToCartes() {
    this.router.navigate(['/cartes']);
  }
  votreMethodePourChangerLaCouleur() {
    const element = this.el.nativeElement.querySelector('#container3');

    if (this.previewCarte.rarete === 'commune') {
      this.renderer.addClass(element, this.blueColor);
      this.renderer.removeClass(element, this.goldColor);
      this.renderer.removeClass(element, this.purpleColor);
    } else if (this.previewCarte.rarete === 'rare') {
      this.renderer.addClass(element, this.goldColor);
      this.renderer.removeClass(element, this.blueColor);
      this.renderer.removeClass(element, this.purpleColor);
    } else if (this.previewCarte.rarete === 'epique') {
      this.renderer.addClass(element, this.purpleColor);
      this.renderer.removeClass(element, this.goldColor);
      this.renderer.removeClass(element, this.blueColor);
    } else {
    }
  }
}
