/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountControlComponent } from './account-control.component';

describe('AccountControlComponent', () => {
  let component: AccountControlComponent;
  let fixture: ComponentFixture<AccountControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
