/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChordService} from './chord.service';

describe('ChordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChordService]
    });
  });

  it('should ...', inject([ChordService], (service: ChordService) => {
    expect(service).toBeTruthy();
  }));
});
