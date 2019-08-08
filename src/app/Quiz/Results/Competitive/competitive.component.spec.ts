import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveComponent } from './competitive.component';

describe('CompetitiveComponent', () => {
  let component: CompetitiveComponent;
  let fixture: ComponentFixture<CompetitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
