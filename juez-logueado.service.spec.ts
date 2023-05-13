import { TestBed } from '@angular/core/testing';

import { JuezLogueadoService } from './juez-logueado.service';

describe('JuezLogueadoService', () => {
  let service: JuezLogueadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuezLogueadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
