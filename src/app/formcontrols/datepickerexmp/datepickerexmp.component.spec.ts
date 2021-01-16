import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerexmpComponent } from './datepickerexmp.component';

describe('DatepickerexmpComponent', () => {
  let component: DatepickerexmpComponent;
  let fixture: ComponentFixture<DatepickerexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
