import { TestBed } from '@angular/core/testing';

import { LiveStockService } from './live-stock.service';

describe('LiveStockService', () => {
  let service: LiveStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
