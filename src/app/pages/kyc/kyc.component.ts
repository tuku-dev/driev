import { FilesUploadComponent } from "./modals/files-upload/files-upload.component";
import { SuccessModalComponent } from "./../../modals/success-modal/success-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-kyc",
  templateUrl: "./kyc.component.html",
  styleUrls: ["./kyc.component.scss"],
})
export class KYCComponent {
  assetPath = "../../../assets/";

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  openUploadModal(step: Number) {
    const modalRef = this.modalService.open(FilesUploadComponent, {
      centered: true,
      size: "lg",
      windowClass: "files-upload",
    });
    modalRef.componentInstance.content = {
      step,
    };
  }
}
