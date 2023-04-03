import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { UserLayoutRoutingModule } from "./user-layout-routing.module";
import { UserLayoutComponent } from './user-layout.component';

@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    SharedModule,
  ],
})
export class UserLayoutModule {}
