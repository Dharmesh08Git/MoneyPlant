import { TestBed } from '@angular/core/testing';

import { EnterQuesService } from './enter-ques.service';

describe('EnterQuesService', () => {
  let service: EnterQuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterQuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
