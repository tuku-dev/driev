import { Component } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent {
  assetPath = "../../../assets/";
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: true };

  slickInit(e: any) {
    // console.log("slick initialized");
  }
  breakpoint(e: any) {
    // console.log("breakpoint");
  }
  afterChange(e: any) {
    // console.log("afterChange");
  }
  beforeChange(e: any) {
    // console.log("beforeChange");
  }
  constructor() {}
  ngOnInit(): void {}
}
