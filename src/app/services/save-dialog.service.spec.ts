import { TestBed } from '@angular/core/testing';

import { SaveDialogService } from './save-dialog.service';

describe('SaveDialogService', () => {
  let service: SaveDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
