import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySeguridadComponent } from './body-seguridad.component';

describe('BodySeguridadComponent', () => {
  let component: BodySeguridadComponent;
  let fixture: ComponentFixture<BodySeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
