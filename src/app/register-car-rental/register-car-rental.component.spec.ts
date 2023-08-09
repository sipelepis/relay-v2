import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarRentalComponent } from './register-car-rental.component';

describe('RegisterCarRentalComponent', () => {
  let component: RegisterCarRentalComponent;
  let fixture: ComponentFixture<RegisterCarRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCarRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
