import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCarRentalComponent } from './log-in-car-rental.component';

describe('LogInCarRentalComponent', () => {
  let component: LogInCarRentalComponent;
  let fixture: ComponentFixture<LogInCarRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInCarRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
