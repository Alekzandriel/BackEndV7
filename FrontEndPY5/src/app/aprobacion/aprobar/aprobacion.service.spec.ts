import { TestBed } from '@angular/core/testing';

import { AprobacionService } from './aprobacion.service';

describe('AprobacionService', () => {
  let service: AprobacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprobacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
