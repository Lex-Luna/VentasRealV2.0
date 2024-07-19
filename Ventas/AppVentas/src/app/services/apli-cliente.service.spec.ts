import { TestBed } from '@angular/core/testing';

import { ApliClienteService } from './apli-cliente.service';

describe('ApliClienteService', () => {
  let service: ApliClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApliClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
