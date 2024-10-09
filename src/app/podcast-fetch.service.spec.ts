import { TestBed } from '@angular/core/testing';

import { PodcastFetchService } from './podcast-fetch.service';

describe('PodcastFetchService', () => {
  let service: PodcastFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
