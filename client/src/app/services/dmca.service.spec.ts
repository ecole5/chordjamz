/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DmcaService } from './dmca.service';

describe('Service: Dmca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DmcaService]
    });
  });

  it('should ...', inject([DmcaService], (service: DmcaService) => {
    expect(service).toBeTruthy();
  }));
});
