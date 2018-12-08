import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDayPage } from './input-day.page';

describe('InputDayPage', () => {
  let component: InputDayPage;
  let fixture: ComponentFixture<InputDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
