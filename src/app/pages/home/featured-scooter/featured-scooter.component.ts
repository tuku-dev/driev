import { Component, ElementRef, ViewChild } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: "app-featured-scooter",
  templateUrl: "./featured-scooter.component.html",
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./featured-scooter.component.scss",
  ],
})
export class FeaturedScooterComponent {
  @ViewChild("featuredSlider") featuredSlider: ElementRef<HTMLElement>;

  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance = null;
  featuredList: any;

  ngOnInit(): void {
    this.featuredList = [
      {
        imgUrl: "",
        name: "Ather 450X",
        details: [
          "Battery life upto 70-8- km",
          "Versatile segway technology",
          "Maximum comfort for urban mobility",
        ],
      },
      {
        imgUrl: "http://dummyimage.com/x.png/dddddd/000000",
        name: "Amabel",
        details: ["Amabel Stubs", "Kerianne Plumley"],
      },
      {
        imgUrl: "http://dummyimage.com/x.png/cc0000/ffffff",
        name: "Riccardo",
        details: [
          "Riccardo Drugan",
          "Traver Service",
          "Teodora Coopper",
          "Renie Ropartz",
        ],
      },
      {
        imgUrl: "http://dummyimage.com/x.png/5fa2dd/ffffff",
        name: "Sanson",
        details: ["Sanson Doick", "Theresina Papps", "Eada Juett"],
      },
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.featuredSlider.nativeElement, {
        initial: this.currentSlide,
        loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
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
