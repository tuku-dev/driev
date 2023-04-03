import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import { SuccessComponent } from "./success/success.component";

@Component({
  selector: "app-partner",
  templateUrl: "./partner.component.html",
  styleUrls: ["./partner.component.scss"],
})
export class PartnerComponent {
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}
  submit() {
    const modalRef = this.modalService.open(SuccessComponent, {
      centered: true,
      windowClass: "success-modal",
    });
  }
}
