import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingYouUpComponent } from './setting-you-up.component';

describe('SettingYouUpComponent', () => {
  let component: SettingYouUpComponent;
  let fixture: ComponentFixture<SettingYouUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingYouUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingYouUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
