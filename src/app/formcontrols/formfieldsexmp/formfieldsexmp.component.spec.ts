import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldsexmpComponent } from './formfieldsexmp.component';

describe('FormfieldsexmpComponent', () => {
  let component: FormfieldsexmpComponent;
  let fixture: ComponentFixture<FormfieldsexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldsexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldsexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
