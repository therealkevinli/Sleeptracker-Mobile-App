import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LognightPage } from './lognight.page';

describe('LognightPage', () => {
  let component: LognightPage;
  let fixture: ComponentFixture<LognightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LognightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LognightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
