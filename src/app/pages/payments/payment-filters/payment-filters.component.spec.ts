import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFiltersComponent } from './payment-filters.component';

describe('PaymentFiltersComponent', () => {
  let component: PaymentFiltersComponent;
  let fixture: ComponentFixture<PaymentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
