import { SharedModule } from "src/app/shared/shared.module";
import { ThingsUsdKnowComponent } from "./things-usd-know.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ThingsUsdKnowComponent],
  imports: [CommonModule, SharedModule],
})
export class ThingsUsdKnowModule {}
