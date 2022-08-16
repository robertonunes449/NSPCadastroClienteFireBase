import { TestBed } from '@angular/core/testing';

import { CliServiceService } from './cli-service.service';

describe('CliServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CliServiceService = TestBed.get(CliServiceService);
    expect(service).toBeTruthy();
  });
});
