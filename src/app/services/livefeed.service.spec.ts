import { TestBed } from '@angular/core/testing';

import { LiveFeedService } from './livefeed.service';

describe('LivefeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveFeedService = TestBed.get(LiveFeedService);
    expect(service).toBeTruthy();
  });
});
