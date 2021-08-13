import { TestBed } from '@angular/core/testing';

import { MyCatsService } from './my-cats.service';

describe('MyCatsService', () => {
  let service: MyCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
