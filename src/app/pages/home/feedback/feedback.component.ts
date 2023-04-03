import { Component, ElementRef, ViewChild } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./feedback.component.scss",
  ],
})
export class FeedbackComponent {
  assetPath = "../../../../assets/";
  @ViewChild("feedbackSlider") feedbackSlider: ElementRef<HTMLElement>;
  feedbackList: any;
  fullRating = Array(5);

  ngOnInit(): void {
    this.feedbackList = [
      {
        imgUrl: "http://dummyimage.com/178x218.png/cc0000/ffffff",
        name: "Appolonia",
        location: "Room 349",
        rating: 4,
        feedback:
          "Etiam ultricies nisi vel augue. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Quisque id odio. Ut varius tincidunt libero.",
      },
      {
        imgUrl: "http://dummyimage.com/129x158.png/dddddd/000000",
        name: "Lian",
        location: "11th Floor",
        rating: 4,
        feedback:
          "Nulla sit amet est. Nulla sit amet est. Quisque id odio. Curabitur vestibulum aliquam leo. Ut varius tincidunt libero.",
      },
      {
        imgUrl: "http://dummyimage.com/225x153.png/5fa2dd/ffffff",
        name: "Atlanta",
        location: "PO Box 15946",
        rating: 4,
        feedback:
          "Morbi mollis tellus ac sapien. Curabitur ullamcorper ultricies nisi. Duis lobortis massa imperdiet quam. Curabitur at lacus ac velit ornare lobortis. Nam eget dui.",
      },
      {
        imgUrl: "http://dummyimage.com/112x205.png/dddddd/000000",
        name: "Kai",
        location: "Room 76",
        rating: 3,
        feedback:
          "Nullam accumsan lorem in dui. Sed fringilla mauris sit amet nibh. Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi. Phasellus viverra nulla ut metus varius laoreet.",
      },
      {
        imgUrl: "http://dummyimage.com/152x171.png/dddddd/000000",
        name: "Zach",
        location: "Suite 90",
        rating: 1,
        feedback:
          "Phasellus ullamcorper ipsum rutrum nunc. Aenean massa. Etiam feugiat lorem non metus. Quisque id mi. Phasellus tempus.",
      },
      {
        imgUrl: "http://dummyimage.com/231x143.png/dddddd/000000",
        name: "Lexine",
        location: "PO Box 60471",
        rating: 1,
        feedback:
          "Vivamus quis mi. Nullam accumsan lorem in dui. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Pellentesque auctor neque nec urna. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.",
      },
      {
        imgUrl: "http://dummyimage.com/219x152.png/cc0000/ffffff",
        name: "Eugine",
        location: "Suite 50",
        rating: 4,
        feedback:
          "Maecenas vestibulum mollis diam. Curabitur blandit mollis lacus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Ut non enim eleifend felis pretium feugiat..",
      },
      {
        imgUrl: "http://dummyimage.com/116x112.png/cc0000/ffffff",
        name: "Rhodie",
        location: "Suite 55",
        rating: 5,
        feedback:
          "Sed in libero ut nibh placerat accumsan. Phasellus blandit leo ut odio. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nulla porta dolor. Phasellus consectetuer vestibulum elit.",
      },
      {
        imgUrl: "http://dummyimage.com/247x141.png/dddddd/000000",
        name: "Odie",
        location: "Apt 613",
        rating: 1,
        feedback:
          "Fusce fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mollis hendrerit risus. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Phasellus accumsan cursus velit.",
      },
      {
        imgUrl: "http://dummyimage.com/237x110.png/ff4444/ffffff",
        name: "Edith",
        location: "PO Box 29479",
        rating: 1,
        feedback:
          "Nunc nulla. Suspendisse potenti. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Curabitur nisi. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.",
      },
      {
        imgUrl: "http://dummyimage.com/248x161.png/cc0000/ffffff",
        name: "Lurette",
        location: "6th Floor",
        rating: 4,
        feedback:
          "Proin magna. Aenean commodo ligula eget dolor. Quisque ut nisi. Duis leo. Ut non enim eleifend felis pretium feugiat.",
      },
      {
        imgUrl: "http://dummyimage.com/198x222.png/5fa2dd/ffffff",
        name: "Hoyt",
        location: "Suite 60",
        rating: 1,
        feedback:
          "ثم نفس سقطت وبالتحديد،, جزيرتي باستخدام أن دنو. إذ هنا؟ الستار وتنصيب كان. أهّل ايطاليا، بريطانيا-فرنسا قد أخذ. سليمان، إتفاقية بين ما, يذكر الحدود أي بعد, معاملة بولندا، الإطلاق عل إيو.",
      },
      {
        imgUrl: "http://dummyimage.com/243x141.png/dddddd/000000",
        name: "Marie-ann",
        location: "Suite 99",
        rating: 1,
        feedback:
          "Nunc nec neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Suspendisse potenti. Nullam dictum felis eu pede mollis pretium. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.",
      },
      {
        imgUrl: "http://dummyimage.com/141x119.png/5fa2dd/ffffff",
        name: "Horten",
        location: "Room 1067",
        rating: 4,
        feedback:
          "Proin magna. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus. Praesent venenatis metus at tortor pulvinar varius.",
      },
      {
        imgUrl: "http://dummyimage.com/229x155.png/cc0000/ffffff",
        name: "Jacquenetta",
        location: "5th Floor",
        rating: 2,
        feedback:
          "Pellentesque auctor neque nec urna. In ut quam vitae odio lacinia tincidunt. Ut varius tincidunt libero. Suspendisse eu ligula. Nulla sit amet est.",
      },
      {
        imgUrl: "http://dummyimage.com/246x137.png/dddddd/000000",
        name: "Richie",
        location: "Suite 54",
        rating: 2,
        feedback:
          "Phasellus accumsan cursus velit. Donec sodales sagittis magna. Etiam vitae tortor. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut non enim eleifend felis pretium feugiat.",
      },
      {
        imgUrl: "http://dummyimage.com/177x204.png/cc0000/ffffff",
        name: "Baxie",
        location: "Room 442",
        rating: 3,
        feedback:
          "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Cras sagittis. Fusce neque. Vestibulum ullamcorper mauris at ligula. Aenean vulputate eleifend tellus.",
      },
      {
        imgUrl: "http://dummyimage.com/113x189.png/ff4444/ffffff",
        name: "Lambert",
        location: "11th Floor",
        rating: 5,
        feedback:
          "Donec mollis hendrerit risus. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Ut non enim eleifend felis pretium feugiat.",
      },
    ];
  }

  slider: KeenSliderInstance = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.feedbackSlider.nativeElement, {
      loop: true,
      mode: "free",
      slides: { origin: "center", perView: 4.5, spacing: 15 },
      breakpoints: {
        "(min-width: 1400px)": {
          slides: {
            perView: 4.5,
            spacing: 15,
          },
        },
        "(max-width: 1399px)": {
          slides: {
            perView: 3.5,
            spacing: 15,
          },
        },
        "(max-width: 991px)": {
          slides: {
            perView: 2.5,
            spacing: 15,
          },
        },
        "(max-width: 767px)": {
          slides: {
            perView: 1.5,
            spacing: 15,
          },
        },
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
