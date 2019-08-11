import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAllProductsComponent } from './card-all-products.component';

describe('CardAllProductsComponent', () => {
  let component: CardAllProductsComponent;
  let fixture: ComponentFixture<CardAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
