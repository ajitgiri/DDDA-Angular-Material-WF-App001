import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetoggleexmpComponent } from './slidetoggleexmp.component';

describe('SlidetoggleexmpComponent', () => {
  let component: SlidetoggleexmpComponent;
  let fixture: ComponentFixture<SlidetoggleexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidetoggleexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidetoggleexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
