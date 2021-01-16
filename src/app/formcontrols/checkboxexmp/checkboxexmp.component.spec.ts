import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxexmpComponent } from './checkboxexmp.component';

describe('CheckboxexmpComponent', () => {
  let component: CheckboxexmpComponent;
  let fixture: ComponentFixture<CheckboxexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
