import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsYouKnowComponent } from './things-you-know.component';

describe('ThingsYouKnowComponent', () => {
  let component: ThingsYouKnowComponent;
  let fixture: ComponentFixture<ThingsYouKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsYouKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingsYouKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
