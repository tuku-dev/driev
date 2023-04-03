import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.scss"],
})
export class SuccessComponent {
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {}
  viewStatus() {
    this.modalRef.close({ success: true });
  }
}
