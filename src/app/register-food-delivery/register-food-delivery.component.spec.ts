import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFoodDeliveryComponent } from './register-food-delivery.component';

describe('RegisterFoodDeliveryComponent', () => {
  let component: RegisterFoodDeliveryComponent;
  let fixture: ComponentFixture<RegisterFoodDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFoodDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
