import { TestBed } from '@angular/core/testing';

import { GetInsuranceService } from './get-insurance.service';

describe('GetInsuranceService', () => {
  let service: GetInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
