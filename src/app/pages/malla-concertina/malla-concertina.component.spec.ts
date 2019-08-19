import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MallaConcertinaComponent } from './malla-concertina.component';

describe('MallaConcertinaComponent', () => {
  let component: MallaConcertinaComponent;
  let fixture: ComponentFixture<MallaConcertinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MallaConcertinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MallaConcertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
