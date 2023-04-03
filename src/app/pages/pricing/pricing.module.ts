import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { PricingComponent } from "./pricing.component";

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, SlickCarouselModule, NgbNavModule, SharedModule],
})
export class PricingModule {}
