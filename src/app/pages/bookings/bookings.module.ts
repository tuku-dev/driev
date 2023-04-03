import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BillingDetailsModalComponent } from "./modals/billing-details-modal/billing-details-modal.component";
import { BookingsComponent } from "./bookings.component";
import { ConfirmationComponent } from "./modals/confirmation/confirmation.component";
import { TopupsComponent } from "./modals/topups/topups.component";
import { CancellationDetailsComponent } from './modals/cancellation-details/cancellation-details.component';
import { CancelRideComponent } from './modals/cancel-ride/cancel-ride.component';

@NgModule({
  declarations: [
    BookingsComponent,
    ConfirmationComponent,
    TopupsComponent,
    BillingDetailsModalComponent,
    CancellationDetailsComponent,
    CancelRideComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class BookingsModule {}
