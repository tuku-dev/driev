import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBookingComponent } from './choose-booking.component';

describe('ChooseBookingComponent', () => {
  let component: ChooseBookingComponent;
  let fixture: ComponentFixture<ChooseBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
