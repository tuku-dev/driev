import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactUsComponent } from "./contact-us.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [ContactUsComponent, ContactFormComponent, SuccessComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class ContactUsModule {}
