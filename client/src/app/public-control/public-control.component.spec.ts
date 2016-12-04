/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicControlComponent } from './public-control.component';

describe('PublicControlComponent', () => {
  let component: PublicControlComponent;
  let fixture: ComponentFixture<PublicControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
