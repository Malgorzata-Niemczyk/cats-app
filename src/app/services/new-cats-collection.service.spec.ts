import { TestBed } from '@angular/core/testing';

import { NewCatsCollectionService } from './new-cats-collection.service';

describe('MyCatsService', () => {
  let service: NewCatsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCatsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
