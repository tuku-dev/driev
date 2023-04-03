import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipForNowComponent } from './skip-for-now.component';

describe('SkipForNowComponent', () => {
  let component: SkipForNowComponent;
  let fixture: ComponentFixture<SkipForNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipForNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipForNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
