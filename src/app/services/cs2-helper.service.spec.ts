import { TestBed } from '@angular/core/testing';

import { Cs2HelperService } from './cs2-helper.service';

describe('Cs2HelperService', () => {
  let service: Cs2HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cs2HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
