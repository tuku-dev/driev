import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsUsdKnowComponent } from './things-usd-know.component';

describe('ThingsUsdKnowComponent', () => {
  let component: ThingsUsdKnowComponent;
  let fixture: ComponentFixture<ThingsUsdKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsUsdKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingsUsdKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
