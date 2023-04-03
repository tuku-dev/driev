import { Component, ElementRef, ViewChild } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: "app-three-cards",
  templateUrl: "./three-cards.component.html",
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./three-cards.component.scss",
  ],
})
export class ThreeCardsComponent {
  assetPath = "../../../assets/";
  @ViewChild("threeCardSlider") threeCardSlider: ElementRef<HTMLElement>;

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance = null;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.threeCardSlider.nativeElement, {
        initial: this.currentSlide,
        loop: true,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
        disabled: true,
        slides: {
          perView: 3,
          spacing: 15,
        },
        breakpoints: {
          "(max-width: 1399px)": {
            disabled: false,
            slides: {
              perView: 3,
              spacing: 15,
            },
          },
          "(max-width: 991px)": {
            disabled: false,
            slides: {
              perView: 2,
              spacing: 15,
            },
          },
          "(max-width: 767px)": {
            disabled: false,
            slides: {
              perView: 1,
              spacing: 0,
            },
          },
          "(min-width: 1400px)": {
            disabled: true,
          },
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
