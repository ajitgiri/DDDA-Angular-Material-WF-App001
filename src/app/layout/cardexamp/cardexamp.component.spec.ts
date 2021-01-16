import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexampComponent } from './cardexamp.component';

describe('CardexampComponent', () => {
  let component: CardexampComponent;
  let fixture: ComponentFixture<CardexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
