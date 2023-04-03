import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.component.html",
  styleUrls: ["./payment-details.component.scss"],
})
export class PaymentDetailsComponent {
  @Input() content: any;
  paymentDetails = {};

  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    this.paymentDetails = this.content.paymentDetails;
    console.log(this.paymentDetails);
  }

  close() {
    this.modalRef.close({ return: false });
  }

  _hasData(value) {
    return value ? value : "";
  }
}