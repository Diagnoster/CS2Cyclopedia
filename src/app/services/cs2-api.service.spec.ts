import { TestBed } from '@angular/core/testing';

import { Cs2ApiService } from './cs2-api.service';

describe('Cs2ApiService', () => {
  let service: Cs2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cs2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
