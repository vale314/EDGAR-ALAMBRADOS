import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCiclonicaComponent } from './body-ciclonica.component';

describe('BodyCiclonicaComponent', () => {
  let component: BodyCiclonicaComponent;
  let fixture: ComponentFixture<BodyCiclonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCiclonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCiclonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
