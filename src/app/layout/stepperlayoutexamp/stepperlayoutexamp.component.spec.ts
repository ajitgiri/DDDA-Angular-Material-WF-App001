import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperlayoutexampComponent } from './stepperlayoutexamp.component';

describe('StepperlayoutexampComponent', () => {
  let component: StepperlayoutexampComponent;
  let fixture: ComponentFixture<StepperlayoutexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperlayoutexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperlayoutexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
