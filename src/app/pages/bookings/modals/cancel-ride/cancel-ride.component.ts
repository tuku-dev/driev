import { CancellationDetailsComponent } from "./../cancellation-details/cancellation-details.component";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-cancel-ride",
  templateUrl: "./cancel-ride.component.html",
  styleUrls: ["./cancel-ride.component.scss"],
})
export class CancelRideComponent {
  constructor(
    private modalService: NgbModal,
    private modalRef: NgbActiveModal
  ) {}
  ngOnInit(): void {}

  close() {
    this.modalRef.close({ success: false });
  }
  submit() {
    this.modalRef.close({ success: true });

    this.modalService.open(CancellationDetailsComponent, {
      centered: true,
      windowClass: "cancellation-details-modal",
    });
  }
}
