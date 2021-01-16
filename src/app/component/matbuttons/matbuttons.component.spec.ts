import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbuttonsComponent } from './matbuttons.component';

describe('MatbuttonsComponent', () => {
  let component: MatbuttonsComponent;
  let fixture: ComponentFixture<MatbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
