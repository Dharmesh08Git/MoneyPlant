import { TestBed } from '@angular/core/testing';

import { AllQuesService } from './all-ques.service';

describe('AllQuesService', () => {
  let service: AllQuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllQuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
