import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistexampComponent } from './gridlistexamp.component';

describe('GridlistexampComponent', () => {
  let component: GridlistexampComponent;
  let fixture: ComponentFixture<GridlistexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlistexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlistexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
