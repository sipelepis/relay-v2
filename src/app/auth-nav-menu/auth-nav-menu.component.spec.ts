import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavMenuComponent } from './auth-nav-menu.component';

describe('AuthNavMenuComponent', () => {
  let component: AuthNavMenuComponent;
  let fixture: ComponentFixture<AuthNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
