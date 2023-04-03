import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnerComponent } from "./partner.component";
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [PartnerComponent, SuccessComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class PartnerModule {}
