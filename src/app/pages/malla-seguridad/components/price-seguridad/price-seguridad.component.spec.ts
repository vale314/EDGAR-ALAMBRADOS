import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSeguridadComponent } from './price-seguridad.component';

describe('PriceSeguridadComponent', () => {
  let component: PriceSeguridadComponent;
  let fixture: ComponentFixture<PriceSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
