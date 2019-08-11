import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCiclonicaComponent } from './price-ciclonica.component';

describe('PriceCiclonicaComponent', () => {
  let component: PriceCiclonicaComponent;
  let fixture: ComponentFixture<PriceCiclonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCiclonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCiclonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
