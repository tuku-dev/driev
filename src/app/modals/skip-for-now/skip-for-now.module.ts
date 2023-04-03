import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkipForNowComponent } from "./skip-for-now.component";

@NgModule({
  declarations: [SkipForNowComponent],
  imports: [CommonModule, RouterModule],
})
export class SkipForNowModule {}
