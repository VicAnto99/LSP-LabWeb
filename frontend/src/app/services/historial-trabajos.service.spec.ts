import { TestBed } from '@angular/core/testing';

import { HistorialTrabajosService } from './historial-trabajos.service';

describe('HistorialTrabajosService', () => {
  let service: HistorialTrabajosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialTrabajosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
