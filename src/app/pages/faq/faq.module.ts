import { SharedModule } from "./../../shared/shared.module";
import { FaqComponent } from "./faq.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, SharedModule, NgbAccordionModule],
})
export class FaqModule {}
