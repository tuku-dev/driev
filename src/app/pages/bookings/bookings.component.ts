import { CancelRideComponent } from "./modals/cancel-ride/cancel-ride.component";
import { ConfirmationComponent } from "./modals/confirmation/confirmation.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import { TopupsComponent } from "./modals/topups/topups.component";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"],
})
export class BookingsComponent {
  assetPath = "../../../assets/";
  bookingActiveList = {};
  bookingUpcomingList = {};
  bookingCompletedList = {};
  bookingCancelledList = {};
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.bookingActiveList = [
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Coordinator",
        description:
          "Amet corporis expedita omnis quo molestiae et delectus vitae in.",
        vehicleDetails: [
          { name: "Vehicle Number", value: "et401" },
          {
            name: "Plan",
            value: "laboriosam",
          },
          {
            name: "Kilometer Driven",
            value: "206/615 km",
          },
        ],
        dated: "Wed Jan 18 2023 09:28:44 GMT+0530 (India Standard Time)",
      },
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Architect",
        description:
          "Ut earum dolore dolor totam et accusantium nemo fugiat esse.",
        vehicleDetails: [
          { name: "Vehicle Number", value: "et401" },
          {
            name: "Plan",
            value: "laboriosam",
          },
          {
            name: "Kilometer Driven",
            value: "206/615 km",
          },
        ],
        dated: "Thu Jun 16 2022 16:51:00 GMT+0530 (India Standard Time)",
      },
    ];
    this.bookingUpcomingList = [
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Architect",
        description:
          "Ut earum dolore dolor totam et accusantium nemo fugiat esse.",
        vehicleDetails: [
          {
            name: "Plan",
            value: "laboriosam",
          },
          { name: "Price", value: "200" },
          {
            name: "Kilometer Driven",
            value: "0 km",
          },
        ],
        dated: "Thu Jun 16 2022 16:51:00 GMT+0530 (India Standard Time)",
      },
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Coordinator",
        description:
          "Amet corporis expedita omnis quo molestiae et delectus vitae in.",
        vehicleDetails: [
          {
            name: "Plan",
            value: "laboriosam",
          },
          { name: "Price", value: "200" },
          {
            name: "Kilometer Driven",
            value: "0km",
          },
        ],
        dated: "Wed Jan 18 2023 09:28:44 GMT+0530 (India Standard Time)",
      },
    ];
    this.bookingCompletedList = [
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Architect",
        description:
          "Ut earum dolore dolor totam et accusantium nemo fugiat esse.",
        vehicleDetails: [
          { name: "Vehicle Number", value: "et401" },
          {
            name: "Plan",
            value: "laboriosam",
          },
          {
            name: "Price",
            value: "200",
          },
          {
            name: "Kilometer Driven",
            value: "206/615 km",
          },
        ],
        dated: "Thu Jun 16 2022 16:51:00 GMT+0530 (India Standard Time)",
      },
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Coordinator",
        description:
          "Amet corporis expedita omnis quo molestiae et delectus vitae in.",
        vehicleDetails: [
          { name: "Vehicle Number", value: "D291" },
          {
            name: "Plan",
            value: "laboriosam",
          },
          { name: "Price", value: "200" },
          {
            name: "Kilometer Driven",
            value: "0km",
          },
        ],
        dated: "Wed Jan 18 2023 09:28:44 GMT+0530 (India Standard Time)",
      },
    ];
    this.bookingCancelledList = [
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Architect",
        description:
          "Ut earum dolore dolor totam et accusantium nemo fugiat esse.",
        vehicleDetails: [
          {
            name: "Plan",
            value: "Speed / Daily",
          },
          {
            name: "Payment Status",
            value: "Refunded",
          },
          {
            name: "Kilometer Driven",
            value: "0km",
          },
        ],
        dated: "Thu Jun 16 2022 16:51:00 GMT+0530 (India Standard Time)",
      },
      {
        imgUrl: "http://placeimg.com/640/480",
        name: "Coordinator",
        description:
          "Amet corporis expedita omnis quo molestiae et delectus vitae in.",
        vehicleDetails: [
          {
            name: "Plan",
            value: "Speed / Daily",
          },
          { name: "Payment Status", value: "Refunded" },
          {
            name: "Kilometer Driven",
            value: "0km",
          },
        ],
        dated: "Wed Jan 18 2023 09:28:44 GMT+0530 (India Standard Time)",
      },
    ];
  }

  showBookings(evt, bookType) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(bookType).style.display = "block";
    evt.currentTarget.className += " active";
  }

  openConfirmation(type) {
    if (type === "return") {
      const modalRef = this.modalService.open(ConfirmationComponent, {
        centered: true,
        size: "sm",
        windowClass: "confirmation-modal",
      });

      modalRef.componentInstance.content = {
        title: "Returning Your Vehicle",
        description: "Are you sure you want to end your booking?",
        modalImage: "../../../assets/imgs/Inconvience-red.png",
        buttons: [
          {
            name: "Yes",
            btnClasses: "button border text-quaternary",
            action: "submit",
          },
          {
            name: "No",
            btnClasses: "button border text-primary",
            action: "close",
          },
        ],
      };
      modalRef.result.then((response) => {
        if (response.success) {
          const modalRef1 = this.modalService.open(ConfirmationComponent, {
            centered: true,
            size: "sm",
            windowClass: "return-modal",
          });

          modalRef1.componentInstance.content = {
            title: "Returning Your Vehicle",
            description:
              "Your return request has been raised successfully, One of Our Executives will Contact You soon.",
            modalImage: "../../../assets/imgs/Inconvience-red.png",
            buttons: [
              {
                name: "Ok",
                btnClasses: "button border text-primary",
                action: "close()",
              },
            ],
          };
        }
      });
    } else if (type === "cancel") {
      const modalRef = this.modalService.open(CancelRideComponent, {
        centered: true,
        size: "sm",
        windowClass: "cancel-ride-modal",
      });

      modalRef.componentInstance.content = {};
    }
  }

  topUpList() {
    const modalRef = this.modalService.open(TopupsComponent, {
      centered: true,
      size: "lg",
      windowClass: "topup-modal",
    });
  }
}
