import { Component, Input } from "@angular/core";

@Component({
  selector: "app-billing-details-modal",
  templateUrl: "./billing-details-modal.component.html",
  styleUrls: ["./billing-details-modal.component.scss"],
})
export class BillingDetailsModalComponent {
  @Input() content: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.content);
  }
}
