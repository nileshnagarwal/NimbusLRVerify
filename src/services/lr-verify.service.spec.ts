import { TestBed } from '@angular/core/testing';

import { LrVerifyService } from './lr-verify.service';

describe('LrVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LrVerifyService = TestBed.get(LrVerifyService);
    expect(service).toBeTruthy();
  });
});
