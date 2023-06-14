import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterQuesComponent } from './enter-ques.component';

describe('EnterQuesComponent', () => {
  let component: EnterQuesComponent;
  let fixture: ComponentFixture<EnterQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterQuesComponent]
    });
    fixture = TestBed.createComponent(EnterQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
