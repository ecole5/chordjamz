/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditChordComponent } from './edit-chord.component';

describe('EditChordComponent', () => {
  let component: EditChordComponent;
  let fixture: ComponentFixture<EditChordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
