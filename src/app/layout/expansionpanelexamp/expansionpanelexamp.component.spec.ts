import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionpanelexampComponent } from './expansionpanelexamp.component';

describe('ExpansionpanelexampComponent', () => {
  let component: ExpansionpanelexampComponent;
  let fixture: ComponentFixture<ExpansionpanelexampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionpanelexampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionpanelexampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
