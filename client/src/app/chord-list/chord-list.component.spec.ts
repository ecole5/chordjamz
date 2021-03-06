/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChordListComponent } from './chord-list.component';

describe('ChordListComponent', () => {
  let component: ChordListComponent;
  let fixture: ComponentFixture<ChordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
