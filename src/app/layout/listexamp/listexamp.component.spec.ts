import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexampComponent } from './listexamp.component';

describe('ListexampComponent', () => {
  let component: ListexampComponent;
  let fixture: ComponentFixture<ListexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
