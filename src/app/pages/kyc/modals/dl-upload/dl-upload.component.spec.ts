import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlUploadComponent } from './dl-upload.component';

describe('DlUploadComponent', () => {
  let component: DlUploadComponent;
  let fixture: ComponentFixture<DlUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
