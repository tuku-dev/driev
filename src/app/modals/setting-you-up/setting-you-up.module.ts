import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingYouUpComponent } from "./setting-you-up.component";

@NgModule({
  declarations: [SettingYouUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SettingYouUpModule {}
