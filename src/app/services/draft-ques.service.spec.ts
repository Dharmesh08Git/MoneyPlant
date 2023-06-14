import { TestBed } from '@angular/core/testing';

import { DraftQuesService } from './draft-ques.service';

describe('DraftQuesService', () => {
  let service: DraftQuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftQuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
