import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonederechercheComponent } from './zonederecherche.component';

describe('ZonederechercheComponent', () => {
  let component: ZonederechercheComponent;
  let fixture: ComponentFixture<ZonederechercheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonederechercheComponent]
    });
    fixture = TestBed.createComponent(ZonederechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
