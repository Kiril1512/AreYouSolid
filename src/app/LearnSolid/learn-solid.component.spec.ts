import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSolidComponent } from './learn-solid.component';

describe('LearnSolidComponent', () => {
  let component: LearnSolidComponent;
  let fixture: ComponentFixture<LearnSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
