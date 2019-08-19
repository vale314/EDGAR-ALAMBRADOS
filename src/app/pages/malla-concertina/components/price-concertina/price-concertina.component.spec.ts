import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceConcertinaComponent } from './price-concertina.component';

describe('PriceConcertinaComponent', () => {
  let component: PriceConcertinaComponent;
  let fixture: ComponentFixture<PriceConcertinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceConcertinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceConcertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
