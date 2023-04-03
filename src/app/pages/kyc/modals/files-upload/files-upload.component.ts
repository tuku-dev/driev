import { SuccessModalComponent } from "./../../../../modals/success-modal/success-modal.component";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-files-upload",
  templateUrl: "./files-upload.component.html",
  styleUrls: ["./files-upload.component.scss"],
})
export class FilesUploadComponent {
  @Input() content: any;
  stepCount = 1;

  constructor(
    private modalService: NgbModal,
    private modalRef: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.stepCount = this.content.step;
    console.log(this.stepCount);
  }

  goBack() {
    this.stepCount = this.stepCount > 1 ? this.stepCount - 1 : 1;
  }
  goNext() {
    this.stepCount = this.stepCount < 5 ? this.stepCount + 1 : 5;

    if (this.stepCount === 5) {
      this.modalRef.close();
      this.showSuccess();
    }
  }
  showSuccess() {
    const modalRef = this.modalService.open(SuccessModalComponent, {
      centered: true,
      windowClass: "kyc-success",
    });
    modalRef.componentInstance.content = {
      modalContent: "Documents Uploaded Successfully",
      buttonText: "Back",
    };
  }
}
