import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSupportComponent } from './member-support.component';

describe('MemberSupportComponent', () => {
  let component: MemberSupportComponent;
  let fixture: ComponentFixture<MemberSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
