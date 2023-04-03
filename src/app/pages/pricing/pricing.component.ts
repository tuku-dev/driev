import { Component, ViewChild } from "@angular/core";
import * as $ from "jquery";
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent {
  @ViewChild("dailySlider") dailySlider: SlickCarouselComponent;
  @ViewChild("weeklySlider") weeklySlider: SlickCarouselComponent;
  @ViewChild("subscriptionSlider") subscriptionSlider: SlickCarouselComponent;

  slides = [
    {
      name: "Orchestrator",
      price: "367.82",
      duration: "day",
      link: "/pricing",
      details: [
        "Id aut exerci",
        "explicabo sit",
        "Dolor iste iste",
        "Sunt quo autem",
        "voluptatibus non",
        "in dolor quidem.",
      ],
    },
    {
      name: "Designer",
      price: "169.57",
      duration: "day",
      link: "/pricing",
      details: [
        "Neque velit conseq",
        "doloremque conseq.",
        "Aut dolor ut et.",
        "Quia praesentium",
      ],
    },
    {
      name: "Specialist",
      price: "771.23",
      duration: "day",
      link: "/pricing",
      details: [
        "enim. Incidunt",
        "eaque omnis sequi",
        "dolorem veniam",
        "voluptas ut est.",
      ],
    },
    {
      name: "Technician",
      price: "440.88",
      duration: "day",
      link: "/pricing",
      details: [
        "occaecati minima.",
        "Quidem quae non",
        "Vitae magnam",
        "deserunt et fugit",
        "occaecati beatae",
      ],
    },
  ];
  dailyConfig = {
    prevArrow: `<div class="daily-prev"></div>`,
    nextArrow: `<div class="daily-next"></div>`,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  weeklyConfig = {
    prevArrow: `<div class="weekly-prev"></div>`,
    nextArrow: `<div class="weekly-next"></div>`,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  subscriptionConfig = {
    prevArrow: `<div class="subscription-prev"></div>`,
    nextArrow: `<div class="subscription-next"></div>`,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  ngOnInit(): void {}
  dailySlickInit(e) {
    // console.log("dailySlickInit initialized");
  }
  weeklySlickInit(e) {
    // console.log("weeklySlickInit initialized");
  }
  subscriptionSlickInit(e) {
    // console.log("subscriptionSlickInit initialized");
  }
  breakpoint(e) {
    // console.log("breakpoint");
  }

  afterChange(e) {
    // console.log("afterChange");
  }

  beforeChange(e) {
    // console.log("beforeChange");
  }

  showPricing(evt, priceType) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(priceType).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
