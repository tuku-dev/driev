import { PaymentSuccessComponent } from "./../../pages/payment-success/payment-success.component";
import { MemberLayoutComponent } from "./../member-layout/member-layout.component";
import { ThingsUsdKnowComponent } from "./../../pages/things-usd-know/things-usd-know.component";
import { PartnerComponent } from "./../../pages/partner/partner.component";
import { PrivacyPolicyComponent } from "./../../pages/privacy-policy/privacy-policy.component";
import { DocumentRequiredComponent } from "./../../pages/document-required/document-required.component";
import { FaqComponent } from "./../../pages/faq/faq.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./../../pages/about-us/about-us.component";
import { ContactUsComponent } from "./../../pages/contact-us/contact-us.component";
import { HomeComponent } from "./../../pages/home/home.component";
import { PricingComponent } from "./../../pages/pricing/pricing.component";
import { SupportComponent } from "./../../pages/support/support.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    loadChildren: () =>
      import("../../pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "pricing",
    component: PricingComponent,
    loadChildren: () =>
      import("../../pages/pricing/pricing.module").then((m) => m.PricingModule),
  },
  {
    path: "support",
    component: SupportComponent,
    loadChildren: () =>
      import("../../pages/support/support.module").then((m) => m.SupportModule),
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
    loadChildren: () =>
      import("../../pages/contact-us/contact-us.module").then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    loadChildren: () =>
      import("../../pages/about-us/about-us.module").then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: "faq",
    component: FaqComponent,
    loadChildren: () =>
      import("../../pages/faq/faq.module").then((m) => m.FaqModule),
  },
  {
    path: "documents-required",
    component: DocumentRequiredComponent,
    loadChildren: () =>
      import("../../pages/document-required/document-required.module").then(
        (m) => m.DocumentRequiredModule
      ),
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
    loadChildren: () =>
      import("../../pages/privacy-policy/privacy-policy.module").then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: "partner-with-us",
    component: PartnerComponent,
    loadChildren: () =>
      import("../../pages/partner/partner.module").then((m) => m.PartnerModule),
  },
  {
    path: "things-you-should-know",
    component: ThingsUsdKnowComponent,
    loadChildren: () =>
      import("../../pages/things-usd-know/things-usd-know.module").then(
        (m) => m.ThingsUsdKnowModule
      ),
  },
  {
    path: "payment-success",
    component: PaymentSuccessComponent,
    loadChildren: () =>
      import("../../pages/payment-success/payment-success.module").then(
        (m) => m.PaymentSuccessModule
      ),
  },
  {
    path: "profile",
    component: MemberLayoutComponent,
    loadChildren: () =>
      import("../member-layout/member-layout.module").then(
        (m) => m.MemberLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLayoutRoutingModule {}
