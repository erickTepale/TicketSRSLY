import { TestBed } from '@angular/core/testing';

import { EventLocationSearchService } from './event-location-search.service';

describe('EventLocationSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventLocationSearchService = TestBed.get(EventLocationSearchService);
    expect(service).toBeTruthy();
  });
});
