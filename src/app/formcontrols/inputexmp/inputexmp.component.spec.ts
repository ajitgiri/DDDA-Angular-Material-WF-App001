import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputexmpComponent } from './inputexmp.component';

describe('InputexmpComponent', () => {
  let component: InputexmpComponent;
  let fixture: ComponentFixture<InputexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
