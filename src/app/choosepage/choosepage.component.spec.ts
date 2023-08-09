import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosepageComponent } from './choosepage.component';

describe('ChoosepageComponent', () => {
  let component: ChoosepageComponent;
  let fixture: ComponentFixture<ChoosepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
