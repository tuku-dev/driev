import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaymentsComponent } from "./payments.component";
import { PaymentFiltersComponent } from './payment-filters/payment-filters.component';

@NgModule({
  declarations: [PaymentsComponent, PaymentFiltersComponent],
  imports: [CommonModule, SharedModule],
})
export class PaymentsModule {}
