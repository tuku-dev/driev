import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-cancellation-details",
  templateUrl: "./cancellation-details.component.html",
  styleUrls: ["./cancellation-details.component.scss"],
})
export class CancellationDetailsComponent {
  constructor(private modalRef: NgbActiveModal, private router: Router) {}
  ngOnInit(): void {}
  close() {
    this.modalRef.close({ success: true });
    this.router.navigate(["/payment-success"]);
  }
}
