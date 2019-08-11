import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCiclonicaComponent } from './header-ciclonica.component';

describe('HeaderCiclonicaComponent', () => {
  let component: HeaderCiclonicaComponent;
  let fixture: ComponentFixture<HeaderCiclonicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCiclonicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCiclonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
