import { TestBed } from '@angular/core/testing';

import { ChidoPagosService } from './chido-pagos.service';

describe('ChidoPagosService', () => {
  let service: ChidoPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChidoPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
