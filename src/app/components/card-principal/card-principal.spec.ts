import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrincipal } from './card-principal';

describe('CardPrincipal', () => {
  let component: CardPrincipal;
  let fixture: ComponentFixture<CardPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
