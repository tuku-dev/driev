import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalIdUploadComponent } from './local-id-upload.component';

describe('LocalIdUploadComponent', () => {
  let component: LocalIdUploadComponent;
  let fixture: ComponentFixture<LocalIdUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalIdUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalIdUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
