import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  NgbActiveModal,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { CustomDatePipe } from "./date-picker/pipes/custom-date.pipe";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ChunkPipe } from './date-picker/pipes/chunk.pipe';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DatePickerComponent,
    CustomDatePipe,
    SubscriptionComponent,
    PageTitleComponent,
    SideNavComponent,
    PaymentDetailsComponent,
    ChunkPipe,
    TimePickerComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DatePickerComponent,
    CustomDatePipe,
    PageTitleComponent,
    SideNavComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [NgbActiveModal],
})
export class SharedModule {}
