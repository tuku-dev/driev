import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginModule } from "./modals/login/login.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KYCComponent } from "./pages/kyc/kyc.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, KYCComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
