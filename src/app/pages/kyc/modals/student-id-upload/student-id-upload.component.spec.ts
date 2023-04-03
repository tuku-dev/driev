import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdUploadComponent } from './student-id-upload.component';

describe('StudentIdUploadComponent', () => {
  let component: StudentIdUploadComponent;
  let fixture: ComponentFixture<StudentIdUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
