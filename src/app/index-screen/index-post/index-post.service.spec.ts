import { TestBed } from '@angular/core/testing';

import { IndexPostService } from './index-post.service';

describe('IndexPostService', () => {
  let service: IndexPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
