/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PubchordComponent } from './pubchord.component';

describe('PubchordComponent', () => {
  let component: PubchordComponent;
  let fixture: ComponentFixture<PubchordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubchordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubchordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
