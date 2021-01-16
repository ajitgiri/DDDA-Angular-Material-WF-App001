import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcontentexampleComponent } from './dialogcontentexample.component';

describe('DialogcontentexampleComponent', () => {
  let component: DialogcontentexampleComponent;
  let fixture: ComponentFixture<DialogcontentexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcontentexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcontentexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
