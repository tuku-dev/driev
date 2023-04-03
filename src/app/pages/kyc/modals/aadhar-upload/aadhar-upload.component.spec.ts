import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharUploadComponent } from './aadhar-upload.component';

describe('AadharUploadComponent', () => {
  let component: AadharUploadComponent;
  let fixture: ComponentFixture<AadharUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadharUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
