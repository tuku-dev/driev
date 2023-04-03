import { CancellationDetailsComponent } from "./../cancellation-details/cancellation-details.component";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"],
})
export class ConfirmationComponent {
  @Input() content: any;

  constructor(
    private modalService: NgbModal,
    private modalRef: NgbActiveModal
  ) {}

  ngOnInit(): void {
    console.log(this.content);
  }
  close() {
    this.modalRef.close({ success: false });
  }
  submit() {
    this.modalRef.close({ success: true });
  }
}
