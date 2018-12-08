import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNightPage } from './input-night.page';

describe('InputNightPage', () => {
  let component: InputNightPage;
  let fixture: ComponentFixture<InputNightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
