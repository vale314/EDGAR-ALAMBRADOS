import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyConcertinaComponent } from './body-concertina.component';

describe('BodyConcertinaComponent', () => {
  let component: BodyConcertinaComponent;
  let fixture: ComponentFixture<BodyConcertinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyConcertinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyConcertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
