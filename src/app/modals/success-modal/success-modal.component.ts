import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-success-modal",
  templateUrl: "./success-modal.component.html",
  styleUrls: ["./success-modal.component.scss"],
})
export class SuccessModalComponent {
  @Input() content: any;
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    console.log(this.content);
  }
  close() {
    this.modalRef.close({ success: false });
  }
}
