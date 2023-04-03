import { Component } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent {
  faqList = [];
  constructor() {}
  ngOnInit(): void {
    this.faqList = [
      {
        title: "Ut quis et quas nihil iste unde.",
        description:
          "Quia aut minus. Ex ut corporis pariatur qui dolor consequuntur odit. Et iste ratione laudantium itaque fugiat odio. Doloribus omnis eius totam fugiat qui atque voluptatem. Ab architecto non reiciendis nihil. Nostrum nostrum incidunt incidunt sit.",
      },
      {
        title: "Quam itaque quis est dolores dolores asperiores qui sunt.",
        description:
          "Accusantium repudiandae omnis quas sunt facere. Et tempora qui architecto cumque. Et et sapiente labore et iste repudiandae quod. Numquam rem et ad blanditiis vitae sint quia.",
      },
      {
        title:
          "Perferendis consequatur dolores officiis perferendis consequuntur.",
        description:
          "Voluptatibus sed asperiores tenetur qui aliquam in exercitationem. Consequatur et dolores ex et. Ad rerum ut eveniet minus et officia. Est qui maiores optio. Itaque et eum distinctio omnis et dolores.",
      },
      {
        title: "Placeat deleniti doloremque tempora accusantium distinctio.",
        description:
          "Dolorem cum maxime in ducimus. Asperiores eius cum eveniet doloremque reprehenderit ipsam voluptatem. Iusto tempora et vel quia rerum consequatur excepturi a et. Perspiciatis nobis quo sint quibusdam hic quis non. Quaerat suscipit earum quasi autem libero. Voluptatum magnam voluptate.",
      },
      {
        title: "Id temporibus est id placeat quis quo est.",
        description:
          "Magnam ut autem laboriosam aperiam. Eligendi consequatur iusto provident repudiandae quo eveniet blanditiis. Pariatur quia vitae velit sunt adipisci iste pariatur. Quae at perspiciatis nihil inventore non ratione. Ad et rerum iure quaerat. Est in odit alias.",
      },
      {
        title: "Autem reprehenderit quia ex in recusandae debitis eligendi.",
        description:
          "Reiciendis est dolorem ut numquam illo. Veritatis aut sit voluptatem dolorem id laboriosam ullam sit. Quia qui illo voluptate iure id sit doloribus. Mollitia ut aut et autem quo adipisci est exercitationem modi.",
      },
    ];
  }
}
