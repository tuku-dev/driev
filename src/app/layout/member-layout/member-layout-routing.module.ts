import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookingsComponent } from "./../../pages/bookings/bookings.component";
import { KYCComponent } from "./../../pages/kyc/kyc.component";
import { MemberSupportComponent } from "./../../pages/member-support/member-support.component";
import { NotificationComponent } from "./../../pages/notification/notification.component";
import { PaymentsComponent } from "./../../pages/payments/payments.component";
import { PersonalDetailsComponent } from "./../../pages/personal-details/personal-details.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component: ProfileComponent,
  //   loadChildren: () =>
  //     import("../../pages/profile/profile.module").then((m) => m.ProfileModule),
  // },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "personal-details",
  },
  {
    path: "personal-details",
    component: PersonalDetailsComponent,
    loadChildren: () =>
      import("../../pages/personal-details/personal-details.module").then(
        (m) => m.PersonalDetailsModule
      ),
  },
  {
    path: "my-bookings",
    component: BookingsComponent,
    loadChildren: () =>
      import("../../pages/bookings/bookings.module").then(
        (m) => m.BookingsModule
      ),
  },
  {
    path: "payments",
    component: PaymentsComponent,
    loadChildren: () =>
      import("../../pages/payments/payments.module").then(
        (m) => m.PaymentsModule
      ),
  },
  {
    path: "kyc",
    component: KYCComponent,
    loadChildren: () =>
      import("../../pages/kyc/kyc.module").then((m) => m.KYCModule),
  },
  {
    path: "notifications",
    component: NotificationComponent,
    loadChildren: () =>
      import("../../pages/notification/notification.module").then(
        (m) => m.NotificationModule
      ),
  },
  {
    path: "support",
    component: MemberSupportComponent,
    loadChildren: () =>
      import("../../pages/member-support/member-support.module").then(
        (m) => m.MemberSupportModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberLayoutRoutingModule {}
