import { TestBed } from '@angular/core/testing';

import { ProximosCertamenesService } from './proximos-certamenes.service';

describe('ProximosCertamenesService', () => {
  let service: ProximosCertamenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProximosCertamenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
