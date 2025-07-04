import { TestBed } from '@angular/core/testing';

import { Cs2PriceService } from './cs2-price.service';

describe('Cs2PriceService', () => {
  let service: Cs2PriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cs2PriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
