import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent {
  navs = [];

  constructor(public dialogRef: NgbActiveModal) {}

  ngOnInit(): void {
    this.navs = [
      { name: "Personal Details", link: "/profile/personal-details" },
      {
        name: "My Bookings",
        link: "/profile/my-bookings",
      },
      {
        name: "Payments",
        link: "/profile/payments",
      },
      {
        name: "KYC",
        link: "/profile/kyc",
      },
      {
        name: "Notification",
        link: "/profile/notifications",
      },
      {
        name: "Support",
        link: "/profile/support",
      },
    ];
  }
  close() {
    this.dialogRef.close({ success: false });
  }
}
