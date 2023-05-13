import { TestBed } from '@angular/core/testing';

import { TodasLasBandasService } from './todas-las-bandas.service';

describe('TodasLasBandasService', () => {
  let service: TodasLasBandasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodasLasBandasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
