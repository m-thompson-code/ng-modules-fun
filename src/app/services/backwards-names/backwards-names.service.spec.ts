import { TestBed } from '@angular/core/testing';

import { BackwardsNamesService } from './backwards-names.service';

describe('BackwardsNamesService', () => {
  let service: BackwardsNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackwardsNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
