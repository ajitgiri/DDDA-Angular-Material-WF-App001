import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablayoutexampComponent } from './tablayoutexamp.component';

describe('TablayoutexampComponent', () => {
  let component: TablayoutexampComponent;
  let fixture: ComponentFixture<TablayoutexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablayoutexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablayoutexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
