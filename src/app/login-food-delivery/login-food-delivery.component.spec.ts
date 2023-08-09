import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFoodDeliveryComponent } from './login-food-delivery.component';

describe('LoginFoodDeliveryComponent', () => {
  let component: LoginFoodDeliveryComponent;
  let fixture: ComponentFixture<LoginFoodDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFoodDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
