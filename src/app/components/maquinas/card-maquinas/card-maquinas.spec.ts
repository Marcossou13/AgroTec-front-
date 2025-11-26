import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaquinas } from './card-maquinas';

describe('CardMaquinas', () => {
  let component: CardMaquinas;
  let fixture: ComponentFixture<CardMaquinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaquinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMaquinas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
