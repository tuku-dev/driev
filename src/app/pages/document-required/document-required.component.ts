import { Component } from "@angular/core";

@Component({
  selector: "app-document-required",
  templateUrl: "./document-required.component.html",
  styleUrls: ["./document-required.component.scss"],
})
export class DocumentRequiredComponent {
  documentsRequired = [];
  constructor() {}
  ngOnInit(): void {
    this.documentsRequired = [
      {
        image: "../../../assets/imgs/Student.png",
        title: "Student",
        detailList: [
          "Aadhar ID card",
          "Selfie or Recent Photograph",
          "College ID Card",
          "Current Address Proof",
          "Email ID Verification",
        ],
        shortDesc:
          "While we appreciate you sharing your documents, please note that Techsofin reserves the right to confirm or decline the Booking on a case by case basis.",
      },
      {
        image: "../../../assets/imgs/Corporate.png",
        title: "Corporate Employee",
        detailList: [
          "Aadhar ID card",
          "Selfie or Recent Photograph",
          "Corporate ID Card",
          "Current Address Proof",
          "Email ID Verification",
        ],
        shortDesc:
          "While we appreciate you sharing your documents, please note that Techsofin reserves the right to confirm or decline the Booking on a case by case basis.",
      },
      {
        image: "../../../assets/imgs/Goverment.png",
        title: "Goverment Employee",
        detailList: [
          "Aadhar ID card",
          "Selfie or Recent Photograph",
          "Goverment ID Card",
          "Current Address Proof",
          "Email ID Verification",
        ],
        shortDesc:
          "While we appreciate you sharing your documents, please note that Techsofin reserves the right to confirm or decline the Booking on a case by case basis.",
      },
      {
        image: "../../../assets/imgs/Self.png",
        title: "Self Employed",
        detailList: [
          "Aadhar ID card",
          "Selfie or Recent Photograph",
          "3 Months’ bank Statement",
          "Current Address Proof",
          "GST Certificate",
        ],
        shortDesc:
          "While we appreciate you sharing your documents, please note that Techsofin reserves the right to confirm or decline the Booking on a case by case basis.",
      },
      {
        image: "../../../assets/imgs/Others.png",
        title: "Others",
        detailList: [
          "Aadhar ID card",
          "Selfie or Recent Photograph",
          "3 Months’ bank Statement",
          "Current Address Proof",
        ],
        shortDesc:
          "While we appreciate you sharing your documents, please note that Techsofin reserves the right to confirm or decline the Booking on a case by case basis.",
      },
    ];
  }
}
