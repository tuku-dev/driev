import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-choose-booking",
  templateUrl: "./choose-booking.component.html",
  styleUrls: ["./choose-booking.component.scss"],
})
export class ChooseBookingComponent {
  assetPath = "../../../../assets/";
  bookingList = [];
  constructor(private modalRef: NgbActiveModal) {}
  ngOnInit(): void {
    this.bookingList = [
      {
        bookingId: "00044c",
        dated: "2022-08-09T16:50:34.000Z",
        status: "Active",
        selected: false,
      },
      {
        bookingId: "00044d",
        dated: "2022-05-21T23:04:46.000Z",
        status: "Upcoming",
        selected: false,
      },
      {
        bookingId: "00044e",
        dated: "2022-11-18T13:35:49.000Z",
        status: "Completed",
        selected: false,
      },
      {
        bookingId: "00044f",
        dated: "2022-12-07T19:11:32.000Z",
        status: "Cancelled",
        selected: false,
      },
      {
        bookingId: "000450",
        dated: "2022-11-02T22:15:43.000Z",
        status: "Active",
        selected: false,
      },
      {
        bookingId: "000451",
        dated: "2022-05-02T15:41:54.000Z",
        status: "Upcoming",
        selected: false,
      },
      {
        bookingId: "000452",
        dated: "2022-09-28T18:00:27.000Z",
        status: "Completed",
        selected: false,
      },
      {
        bookingId: "000453",
        dated: "2022-05-21T00:17:12.000Z",
        status: "Cancelled",
        selected: false,
      },
    ];
  }

  selectThis(item: any) {
    this.modalRef.close({ success: true, data: item });
  }
}
