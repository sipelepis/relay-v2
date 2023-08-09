import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHomeFormComponent } from './contact-us-home-form.component';

describe('ContactUsHomeFormComponent', () => {
  let component: ContactUsHomeFormComponent;
  let fixture: ComponentFixture<ContactUsHomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsHomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsHomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
