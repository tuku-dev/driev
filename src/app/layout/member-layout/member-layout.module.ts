import { SharedModule } from "src/app/shared/shared.module";
import { SkipForNowModule } from "./../../modals/skip-for-now/skip-for-now.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MemberLayoutComponent } from "./member-layout.component";

import { MemberLayoutRoutingModule } from "./member-layout-routing.module";

@NgModule({
  declarations: [MemberLayoutComponent],
  imports: [
    CommonModule,
    MemberLayoutRoutingModule,
    SkipForNowModule,
    SharedModule,
  ],
})
export class MemberLayoutModule {}
