import { SharedModule } from "./../../shared/shared.module";
import { PrivacyPolicyComponent } from "./privacy-policy.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, NgbAccordionModule, SharedModule],
})
export class PrivacyPolicyModule {}
