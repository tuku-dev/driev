import { SuccessComponent } from "./modals/success/success.component";
import { ViewStatusComponent } from "./modals/view-status/view-status.component";
import { ChooseBookingComponent } from "./modals/choose-booking/choose-booking.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import { IssueFormComponent } from "./modals/issue-form/issue-form.component";

@Component({
  selector: "app-member-support",
  templateUrl: "./member-support.component.html",
  styleUrls: ["./member-support.component.scss"],
})
export class MemberSupportComponent {
  assetPath = "../../../assets/";
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    // this.openSuccessModal({});
  }
  openBookingList() {
    const modalRef = this.modalService.open(ChooseBookingComponent, {
      centered: true,
      windowClass: "booking-list",
      size: "lg",
    });

    modalRef.result.then((response) => {
      if (response.success) {
        this.openIssueForm(response.data);
      }
    }),
      () => {};
  }

  openIssueForm(data) {
    const modalRef = this.modalService.open(IssueFormComponent, {
      centered: true,
      windowClass: "issue-form",
      size: "lg",
    });

    modalRef.result.then((response) => {
      if (response.success) {
        this.openSuccessModal(response.data);
      }
    }),
      () => {};
  }

  openSuccessModal(data) {
    const modalRef = this.modalService.open(SuccessComponent, {
      centered: true,
      windowClass: "success-modal",
      size: "md",
    });

    modalRef.result.then((response) => {
      if (response.success) {
        this.viewStatus();
      }
    }),
      () => {};
  }

  viewStatus() {
    const modalRef = this.modalService.open(ViewStatusComponent, {
      centered: true,
      windowClass: "view-status",
      size: "lg",
    });
  }
}
