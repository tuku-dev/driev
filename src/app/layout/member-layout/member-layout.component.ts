import { SkipForNowComponent } from "./../../modals/skip-for-now/skip-for-now.component";
import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-member-layout",
  templateUrl: "./member-layout.component.html",
  styleUrls: ["./member-layout.component.scss"],
})
export class MemberLayoutComponent {
  constructor(
    public modalService: NgbModal // private dialogRef: NgbActiveModal
  ) {}
  ngOnInit(): void {}
  close() {
    // this.dialogRef.close({ success: false });
  }
  openSkipForNowModal() {
    const modalRef = this.modalService.open(SkipForNowComponent, {
      centered: true,
      windowClass: "skip-for-now-modal",
      // size: "md",
    });

    modalRef.componentInstance.content = {
      title: "Hello There",
      message: "",
      btnText: "close",
    };
  }
}
