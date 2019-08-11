import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallaCiclonicaComponent } from './malla-ciclonica.component';

describe('MallaCiclonicaComponent', () => {
  let component: MallaCiclonicaComponent;
  let fixture: ComponentFixture<MallaCiclonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallaCiclonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallaCiclonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
