import { Component } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent {
  blogList: any;

  ngOnInit(): void {
    this.blogList = [
      {
        title: "Gathered childe that but to thy, evil chaste time memory.",
        imgUrl: "http://placeimg.com/640/480/nature",
        dated: "Sun Aug 07 2022 13:42:21 GMT+0530 (India Standard Time)",
        shortText:
          "Had sins ancient passion a isle partings on alone, he fellow lineage none friend waste his deem, nor along not none tear she almost breast sea, heralds condole vexed aisle.",
      },
      {
        title: "Nach beifall nun die liebe die mir. Ihr schwebet schatten.",
        imgUrl: "http://placeimg.com/640/480/business",
        dated: "Thu Oct 27 2022 06:48:59 GMT+0530 (India Standard Time)",
        shortText:
          "Sit nisi dolorem natus earum dolores amet. Eius voluptatem nobis debitis repellat. Molestiae possimus et repellat ex omnis illo. Quod architecto illo. Quibusdam et laudantium mollitia quis quia aut amet culpa eum.",
      },
      {
        title: "Qui rerum placeat corporis.",
        imgUrl: "http://placeimg.com/640/480/animals",
        dated: "Sat Jul 16 2022 02:48:33 GMT+0530 (India Standard Time)",
        shortText:
          "Molestiae deserunt saepe id. Quae quia quibusdam quas omnis ducimus corrupti nulla. Dolores aspernatur et omnis qui. A possimus dolorum. Veniam molestiae veritatis repellat temporibus.",
      },
      {
        title: "Ex neque et labore veniam culpa vel possimus et.",
        imgUrl: "http://placeimg.com/640/480/transport",
        dated: "Sat Oct 15 2022 16:44:05 GMT+0530 (India Standard Time)",
        shortText:
          "Atque corporis quo non consequuntur accusamus est aut. Voluptates dolorum accusantium libero tempore explicabo eum et. Velit beatae consectetur magnam quia cum.",
      },
    ];
  }
}
