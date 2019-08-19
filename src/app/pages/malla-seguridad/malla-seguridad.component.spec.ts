import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallaSeguridadComponent } from './malla-seguridad.component';

describe('MallaSeguridadComponent', () => {
  let component: MallaSeguridadComponent;
  let fixture: ComponentFixture<MallaSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallaSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
