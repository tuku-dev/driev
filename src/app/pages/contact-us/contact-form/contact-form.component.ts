import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}
  submit() {
    const modalRef = this.modalService.open(SuccessComponent, {
      centered: true,
      windowClass: "success-modal",
    });
  }
}
