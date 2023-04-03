import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./about-us.component";
import { SlickCarouselModule } from "ngx-slick-carousel";

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, SharedModule, SlickCarouselModule],
})
export class AboutUsModule {}
