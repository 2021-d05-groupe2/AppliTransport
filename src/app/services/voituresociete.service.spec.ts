import { TestBed } from '@angular/core/testing';

import { VoituresocieteService } from './voituresociete.service';

describe('VoituresocieteService', () => {
  let service: VoituresocieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoituresocieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
