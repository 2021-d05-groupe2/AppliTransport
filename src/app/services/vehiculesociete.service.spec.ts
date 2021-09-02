import { TestBed } from '@angular/core/testing';

import { VehiculesocieteService } from './vehiculesociete.service';

describe('VehiculesocieteService', () => {
  let service: VehiculesocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculesocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
