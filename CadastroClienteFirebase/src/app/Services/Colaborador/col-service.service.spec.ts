import { TestBed } from '@angular/core/testing';

import { ColServiceService } from './col-service.service';

describe('ColServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColServiceService = TestBed.get(ColServiceService);
    expect(service).toBeTruthy();
  });
});
