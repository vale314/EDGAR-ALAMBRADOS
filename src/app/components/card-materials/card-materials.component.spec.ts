import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaterialsComponent } from './card-materials.component';

describe('CardMaterialsComponent', () => {
  let component: CardMaterialsComponent;
  let fixture: ComponentFixture<CardMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
