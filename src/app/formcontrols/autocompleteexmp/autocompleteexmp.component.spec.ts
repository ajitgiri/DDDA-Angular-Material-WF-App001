import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteexmpComponent } from './autocompleteexmp.component';

describe('AutocompleteexmpComponent', () => {
  let component: AutocompleteexmpComponent;
  let fixture: ComponentFixture<AutocompleteexmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteexmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteexmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
