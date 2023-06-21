import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgfooterComponent } from './pgfooter.component';

describe('PgfooterComponent', () => {
  let component: PgfooterComponent;
  let fixture: ComponentFixture<PgfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgfooterComponent]
    });
    fixture = TestBed.createComponent(PgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
