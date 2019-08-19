import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConcertinaComponent } from './header-concertina.component';

describe('HeaderConcertinaComponent', () => {
  let component: HeaderConcertinaComponent;
  let fixture: ComponentFixture<HeaderConcertinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderConcertinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConcertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
