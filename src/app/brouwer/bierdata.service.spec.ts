import { TestBed } from '@angular/core/testing';

import { BierdataService } from './bierdata.service';

describe('BierdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BierdataService = TestBed.get(BierdataService);
    expect(service).toBeTruthy();
  });
});
