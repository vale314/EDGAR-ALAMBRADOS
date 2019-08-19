import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeguridadComponent } from './header-seguridad.component';

describe('HeaderSeguridadComponent', () => {
  let component: HeaderSeguridadComponent;
  let fixture: ComponentFixture<HeaderSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
