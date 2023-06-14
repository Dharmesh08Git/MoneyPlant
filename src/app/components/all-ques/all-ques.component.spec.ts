import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuesComponent } from './all-ques.component';

describe('AllQuesComponent', () => {
  let component: AllQuesComponent;
  let fixture: ComponentFixture<AllQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllQuesComponent]
    });
    fixture = TestBed.createComponent(AllQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
