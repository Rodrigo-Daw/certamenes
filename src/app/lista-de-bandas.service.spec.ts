import { TestBed } from '@angular/core/testing';

import { ListaDeBandasService } from './lista-de-bandas.service';

describe('ListaDeBandasService', () => {
  let service: ListaDeBandasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDeBandasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
