import { TestBed } from '@angular/core/testing';

import { BrouwerdataService } from './brouwerdata.service';

describe('BrouwerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrouwerdataService = TestBed.get(BrouwerdataService);
    expect(service).toBeTruthy();
  });
});
