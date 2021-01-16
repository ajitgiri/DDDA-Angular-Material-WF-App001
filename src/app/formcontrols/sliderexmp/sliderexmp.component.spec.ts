import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderexmpComponent } from './sliderexmp.component';

describe('SliderexmpComponent', () => {
  let component: SliderexmpComponent;
  let fixture: ComponentFixture<SliderexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
