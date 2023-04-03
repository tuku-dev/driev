import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRequiredComponent } from './document-required.component';

describe('DocumentRequiredComponent', () => {
  let component: DocumentRequiredComponent;
  let fixture: ComponentFixture<DocumentRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
