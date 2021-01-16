import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobtnexmpComponent } from './radiobtnexmp.component';

describe('RadiobtnexmpComponent', () => {
  let component: RadiobtnexmpComponent;
  let fixture: ComponentFixture<RadiobtnexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobtnexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobtnexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
