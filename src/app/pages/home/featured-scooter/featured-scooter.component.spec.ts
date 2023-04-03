import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedScooterComponent } from './featured-scooter.component';

describe('FeaturedScooterComponent', () => {
  let component: FeaturedScooterComponent;
  let fixture: ComponentFixture<FeaturedScooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedScooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
