import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: "app-recommended-plans",
  templateUrl: "./recommended-plans.component.html",
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./recommended-plans.component.scss",
  ],
})
export class RecommendedPlansComponent implements AfterViewInit {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;
  plans: any;
  slider: KeenSliderInstance = null;
  dotHelper: Array<Number> = [];
  currentSlide: number = 1;

  ngOnInit(): void {
    this.plans = [
      {
        imgUrl: "",
        details: [
          "60 Kms",
          "High Speed",
          "No DL Required",
          "Zero Tail Pipe Emmission",
          "Pocket Friendly",
        ],
        speed: "Speed",
        price: "200",
        duration: "day",
      },
      {
        imgUrl: "",
        details: [
          "60 Kms",
          "High Speed",
          "No DL Required",
          "Zero Tail Pipe Emmission",
          "Pocket Friendly",
        ],
        speed: "Speed +",
        price: "250",
        duration: "day",
      },
      {
        imgUrl: "",
        details: [
          "70 Kms",
          "High Speed",
          "No DL Required",
          "Zero Tail Pipe Emmission",
          "Pocket Friendly",
        ],
        speed: "Speed +",
        price: "270",
        duration: "day",
      },
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
        loop: true,
        slides: {
          perView: 2,
          spacing: 15,
        },
        breakpoints: {
          "(max-width: 991px)": {
            slides: {
              perView: 1,
            },
          },
          // "(max-width: 768px)": {
          //   slides: {
          //     perView: 1,
          //   },
          // },
        },
      });
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
