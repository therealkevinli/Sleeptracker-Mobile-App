import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdayPage } from './logday.page';

describe('LogdayPage', () => {
  let component: LogdayPage;
  let fixture: ComponentFixture<LogdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogdayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
