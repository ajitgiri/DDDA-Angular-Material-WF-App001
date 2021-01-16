import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectexmpComponent } from './selectexmp.component';

describe('SelectexmpComponent', () => {
  let component: SelectexmpComponent;
  let fixture: ComponentFixture<SelectexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
