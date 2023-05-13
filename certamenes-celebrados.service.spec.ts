import { TestBed } from '@angular/core/testing';

import { CertamenesCelebradosService } from './certamenes-celebrados.service';

describe('CertamenesCelebradosService', () => {
  let service: CertamenesCelebradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertamenesCelebradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
