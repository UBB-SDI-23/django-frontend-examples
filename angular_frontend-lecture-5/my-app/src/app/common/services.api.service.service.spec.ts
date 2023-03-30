import { TestBed } from '@angular/core/testing';

import { ServicesApiServiceService } from './services.api.service.service';

describe('ServicesApiServiceService', () => {
  let service: ServicesApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
