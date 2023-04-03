import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MemberSupportComponent } from "./member-support.component";
import { ChooseBookingComponent } from "./modals/choose-booking/choose-booking.component";
import { ViewStatusComponent } from "./modals/view-status/view-status.component";
import { IssueFormComponent } from "./modals/issue-form/issue-form.component";
import { SuccessComponent } from './modals/success/success.component';

@NgModule({
  declarations: [
    MemberSupportComponent,
    ChooseBookingComponent,
    ViewStatusComponent,
    IssueFormComponent,
    SuccessComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MemberSupportModule {}
