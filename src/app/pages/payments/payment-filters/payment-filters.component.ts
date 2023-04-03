import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-payment-filters",
  templateUrl: "./payment-filters.component.html",
  styleUrls: ["./payment-filters.component.scss"],
})
export class PaymentFiltersComponent {
  filters = [];
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    this.filters = [
      {
        name: "Last month",
        value: "last-month",
      },
      {
        name: "Last 3 month",
        value: "last-3-month",
      },
      {
        name: "Last 6 month",
        value: "last-6-month",
      },
      {
        name: "Last 12 month",
        value: "last-12-month",
      },
      {
        name: "Last 15 month",
        value: "last-15-month",
      },
      {
        name: "Last 18 month",
        value: "last-18-month",
      },
    ];
  }
  sendValue(item) {
    this.modalRef.close({ status: true, value: item });
  }
}
