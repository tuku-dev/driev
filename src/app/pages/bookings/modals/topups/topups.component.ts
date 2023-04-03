import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component } from "@angular/core";
import { BillingDetailsModalComponent } from "../billing-details-modal/billing-details-modal.component";

@Component({
  selector: "app-topups",
  templateUrl: "./topups.component.html",
  styleUrls: ["./topups.component.scss"],
})
export class TopupsComponent {
  topupList = [];

  constructor(
    private modalService: NgbModal,
    private modalRef: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.topupList = [
      {
        id: 1,
        name: "Tressa",
        kms: "321",
        price: "447.00",
      },
      {
        id: 2,
        name: "Clifton",
        kms: "81",
        price: "425.00",
      },
      {
        id: 3,
        name: "Melvin",
        kms: "827",
        price: "436.00",
      },
    ];
  }
  selectTopup(item) {
    this.modalRef.close();

    const modalRef = this.modalService.open(BillingDetailsModalComponent, {
      windowClass: "top-up-details",
      size: "lg",
      centered: true,
    });

    modalRef.componentInstance.content = {
      data: item,
    };
  }
}
