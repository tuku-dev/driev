import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  quickLinks = [
    {
      name: "Book your Vehicle",
      link: "/#",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Cancellation Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      link: "/privacy-policy",
    },
  ];

  about = [
    {
      name: "Our Story",
      link: "/#",
    },
    {
      name: "Careers",
      link: "/#",
    },
  ];
  help = [
    {
      name: "FAQs",
      link: "/faq",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Documents for KYC",
      link: "/documents-required",
    },
  ];
  socialLinks = [
    {
      name: "Instagram",
      imgUrl: "",
      link: "/#",
      className: "bg-Instagram",
    },
    {
      name: "Twitter",
      imgUrl: "",
      link: "/#",
      className: "bg-Twitter",
    },
    {
      name: "Snap Chat",
      imgUrl: "",
      link: "/#",
      className: "bg-Snapchat",
    },
    {
      name: "Linked In",
      imgUrl: "",
      link: "/#",
      className: "bg-LinkedIN",
    },
  ];
}
