import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  @Input() content: any;
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    console.log(this.content);
  }
  close() {
    this.modalRef.close({ success: false });
  }
}
