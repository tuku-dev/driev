import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCComponent } from './kyc.component';

describe('KYCComponent', () => {
  let component: KYCComponent;
  let fixture: ComponentFixture<KYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
