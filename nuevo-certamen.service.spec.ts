import { TestBed } from '@angular/core/testing';

import { NuevoCertamenService } from './nuevo-certamen.service';

describe('NuevoCertamenService', () => {
  let service: NuevoCertamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoCertamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
